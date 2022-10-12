import React, { Component } from "react";
import { connect } from "react-redux";
import {
  signup,
  inprogress,
  clearalert,
} from "../../redux/actions/authactions";
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
// import LoadingButton from '@mui';
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    opensignup: false,
  };
  handleClose = () => {
    this.setState({ opensignup: false });
  };
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitform = async (event) => {
    event.preventDefault();
    let formData = {
      email: this.state.email,
      username: this.state.name,
      password: this.state.password,
    };
    await this.props.dispatch(inprogress(true));
    await this.props.dispatch(signup(formData));
    // console.log(this.props)
    // this.props.navigate('/login')
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    if (this.props.auth.nextstep) {
      const userid = this.props.auth.registerstatus.user;
      return <Navigate to={"/verify/" + userid} />;
    }
    if (this.props.auth.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
    // if (this.props.errors.message) {
    //     this.setState({error:this.props.errors.message})
    // }
    return (
      <Dialog
        onClose={() => this.handleClose()}
        aria-labelledby="customized-dialog-title"
        open={this.props.opensignup}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => this.handleClose()}
        >
          Register
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => this.props.setOpensignup(false)}
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
            method="post"
            onSubmit={(event) => this.submitform(event)}
          >
            <TextField
              variant="outlined"
              label="User Name"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.handlechange(e)}
              name="name"
            />
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
              <Button
                size="medium"
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Register
              </Button>
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
  };
};
export default connect(mapStateToProps)(Signup);
