import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../assets/Profile.jpg";

const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.light,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.secondary.light
        }
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.secondary.main
        }
    },
    introPara: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "50vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "25vh",
            paddingBottom: "15vh",
            width: "50vw"
        }
    },
    profile: {
        marginTop: "17vh",
        width: "35vw",
        height: "25vh",
        [theme.breakpoints.up("sm")]: {
            marginTop: "18vh",
            width: "35vw",
            height: "60vh"
        }
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
                        <Typography color="primary" style={{ width: "50vw" }}>
                            Creative and Quick witted coder with a passion for
                            making life easy by some lines of code and with
                            enough confidence to succeed in what I want to do.
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item>
                            <Typography color="primary">
                                20+ Projects Done
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="primary">
                                10+ Happy Clients
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <img
                        src={Profile}
                        alt="Profile"
                        className={classes.profile}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Introduction;
