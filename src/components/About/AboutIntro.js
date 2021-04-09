import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../assets/Profile.jpg";

const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.secondary.main
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
        marginTop: "5vh",
        width: "35vw",
        height: "25vh",
        [theme.breakpoints.up("sm")]: {
            marginTop: "13vh",
            marginBottom: "10vh",
            width: "35vw",
            height: "60vh"
        }
    }
}));
const AboutIntro = () => {
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
                        <Typography
                            color="primary"
                            variant="h3"
                            style={{ padding: "2vh", paddingLeft: 0 }}
                        >
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" style={{ width: "30vw" }}>
                            I believe that I can make anyone's life easier by a
                            few lines of code.
                        </Typography>
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

export default AboutIntro;
