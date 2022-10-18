import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
    IconButton,
} from "@mui/material";
import Nav from '../layouts/nav';

const AddressList = () => {
    return (
        <>
        <Nav />
        <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Stack direction="row" spacing={1}>
                    <LocationOnIcon fontSize="large" sx={{ color: "red " }} />

                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Address List
                    </Typography>
                </Stack>
                <Stack>
                    <Button sx={{ color: "#f44336", backgroundColor: "#ffebee" }}>add New addresses</Button>
                </Stack>
            </Box>
            <Box>
                <Paper sx={{ m: "16px, 0px", p: "8px 16px", borderRadius: "5px"}}>
                    <Grid container sx={{ alignItems: "center" ,justifyContent:"space-between"}} spacing={2}>
                        <Grid item xs={2} >
                            <Typography>Ralf Edward</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography noWrap>777 Brockton Avenue, Abington MA 2351</Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography>+1927987987498</Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
        </>
    );
}

export default AddressList;