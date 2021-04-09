import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    introPara: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "40vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "40vw"
        }
    },
    introDesp: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "40vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "50vw"
        }
    },
    icons: {
        color: theme.palette.secondary.main,
        height: "calc( 2vh + 2vw )",
        width: "calc( 2vh + 2vw )",
        [theme.breakpoints.up("sm")]: {
            color: theme.palette.secondary.main
        }
    }
}));

const AboutDescription = () => {
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
                            color="secondary"
                            variant="h3"
                            style={{ width: "40vw", paddingLeft: "2vh" }}
                        >
                            Hi, I'm
                            <br /> Aditya Singh
                            <br />A Full Stack Developer
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            color="secondary"
                            variant="h5"
                            style={{ paddingLeft: "2vh" }}
                        >
                            Follow me
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    const url =
                                        "http://www.facebook.com/adityasorot";
                                    window.open(url, "_blank");
                                }}
                            >
                                <Facebook className={classes.icons} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    const url = "http://www.github.com/reidnax";
                                    window.open(url, "_blank");
                                }}
                            >
                                <GitHub className={classes.icons} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    const url =
                                        "http://www.linkedin.com/in/adityasorot";
                                    window.open(url, "_blank");
                                }}
                            >
                                <LinkedIn className={classes.icons} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    const url =
                                        "http://www.twitter.com/theReidnax";
                                    window.open(url, "_blank");
                                }}
                            >
                                <Twitter className={classes.icons} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    const url =
                                        "http://www.instagram.com/adityasorot";
                                    window.open(url, "_blank");
                                }}
                            >
                                <Instagram className={classes.icons} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    classes={{ root: classes.introDesp }}
                    direction="column"
                    spacong={10}
                >
                    <Grid item>
                        <Typography color="secondary" style={{ width: "40vw" }}>
                            A Full Stack developer with a lot of real life
                            Project Experience and a firm beilever that life can
                            be made easier by a few lines of code. FrontEnd dev
                            in React. BackEnd with java servlets and flask. I am
                            also proficient in Deep learning models.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        style={{ paddingTop: "8vh" }}
                        spacing={2}
                    >
                        <Grid item>
                            <Typography variant="h4" color="secondary">
                                20+ Projects Done
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" color="secondary">
                                10+ Happy Clients
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutDescription;
