import React, { Component } from "react";
import { connect } from "react-redux";
import { login, inprogress, clearalert } from "../../redux/actions/authactions";
import Nav from "../layouts/nav";
import Box from "@mui/material/Box";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../layouts/loading";
class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    open: false,
  };
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  submitform = (event) => {
    event.preventDefault();
    let datatosubmit = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(inprogress(true));

    this.props.dispatch(login(datatosubmit));
  };
  render() {
    if (this.props.auth.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
    return (
      <Dialog
        onClose={() => this.handleClose()}
        aria-labelledby="customized-dialog-title"
        open={this.props.open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => this.handleClose()}
        >
          Welcome Back
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => this.props.setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            style={{ marginTop: "2em" }}
            method="post"
            onSubmit={(event) => this.submitform(event)}
          >
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.handlechange(e)}
              name="email"
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.handlechange(e)}
              name="password"
            />
            <DialogActions>
              {this.props.auth.inprogress ? (
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled
                >
                  Sending....
                </Button>
              ) : (
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              )}
            </DialogActions>
          </Box>
        </DialogContent>
        <Loading isloading={this.props.auth.inprogress} />
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    alerts: state.alerts,
  };
};
export default connect(mapStateToProps)(Login);
