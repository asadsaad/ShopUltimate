import * as React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { makeStyles } from '@material-ui/core'
import {
    Container,
    Box,
    Paper,
    Stack,
    Typography,
    Avatar,
    Button,
    paperClasses,
    Grid,
    TextField,
} from "@mui/material";
import Nav from "../layouts/nav";

const AddAddress = () => {
    const useStyles = makeStyles({
        field: {
            error: {

            }
        }
    })

    const classes = useStyles();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [address, setAddress] = useState('');
    const [addressErr, setAddressErr] = useState(false);
    const [number, setNumber] = useState('');
    const [numberErr, setNumberErr] = useState(false);

    const submitform = async (event) => {
        event.preventDefault();
        setNameErr(false)
        setAddressErr(false)
        setNumberErr(false)

        if (name == '') {
            setNameErr(true)
        }
        if (address == '') {
            setAddressErr(true)
        }
        if (number == '') {
            setNumberErr(true)
        }
        if (name && address && number) {
            console.log(name, address, number)
        }
    };

    return (
        <>
      <Nav />
        <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Stack direction="row" spacing={1}>
                    <LocationOnIcon fontSize="large" sx={{ color: "red " }} />

                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Add Address
                    </Typography>
                </Stack>
                <Stack>
                    <Button component="h2" sx={{ color: "#f44336", backgroundColor: "#ffebee" }}>Back to addresses</Button>
                </Stack>
            </Box>
            <Paper sx={{marginTop: "20px"}}>
                <Box component="form" method="post" onSubmit={submitform} sx={{ padding: "25px" }}>
                    <Grid container rowSpacing={5} columnSpacing={5}>
                        <Grid item md={6} sm={12}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                color="error"
                                fullWidth
                                size="small"
                                error={nameErr}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <TextField
                                id="outlined-basic"
                                label="Address Line"
                                variant="outlined"
                                color="error"
                                fullWidth
                                size="small"
                                error={addressErr}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <TextField
                                id="outlined-basic"
                                label="Phone"
                                variant="outlined"
                                color="error"
                                fullWidth
                                size="small"
                                error={numberErr}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" omponenet="h2" variant="contained" color="error" sx={{ marginTop: "20px" }}>Save Changes</Button>

                </Box>
            </Paper>
        </Container>
        </>
    );
}

export default AddAddress;