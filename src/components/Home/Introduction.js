import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../assets/Profile.jpg";

const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",

        backgroundColor: theme.palette.secondary.light
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.main
    },
    introPara: {
        paddingTop: "25vh",
        paddingBottom: "25vh",
        width: "50vw"
    }
}));

const Introduction = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid container justify="space-between">
                <Grid
                    item
                    container
                    direction="column"
                    classes={{ root: classes.introPara }}
                    spacing={1}
                >
                    <Grid item>
                        <Typography color="primary">
                            A developer/coder
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            color="primary"
                            variant="h2"
                            style={{ padding: "2vh", paddingLeft: 0 }}
                        >
                            I'm Aditya Singh
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" style={{ width: "40vw" }}>
                            Creative and Quick witted coder with a passion for
                            making life easy by some lines of code and with
                            enough confidence to succeed in what I want to do.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" style={{ width: "40vw" }}>
                            20+ Projects Done 10+ Happy Clients
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <img
                        src={Profile}
                        alt="Profile Image"
                        style={{
                            marginTop: "18vh",
                            width: "40vw",
                            height: "60vh"
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Introduction;
