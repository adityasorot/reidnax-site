import {
    Button,
    Grid,
    IconButton,
    Link,
    makeStyles,
    Typography
} from "@material-ui/core";
import {
    ChevronRight,
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            paddingTop: "8vh",
            backgroundColor: theme.palette.secondary.main
        }
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            paddingTop: "8vh",
            backgroundColor: theme.palette.secondary.main
        }
    },
    rightIcon: {
        color: theme.palette.primary.main
    },
    icons: {
        color: theme.palette.primary.main,
        height: "calc( 1.3vh + 1.3vw )",
        width: "calc( 1.3vh + 1.3vw )",

        [theme.breakpoints.up("sm")]: {
            height: "5vh",
            width: "3vw",
            color: theme.palette.primary.main
        }
    },
    boxescontact: {
        width: "40vw",
        // display: "none",
        [theme.breakpoints.up("sm")]: {
            width: "33vw"
        }
    },
    boxeslocation: {
        width: "55vw",
        // display: "none",
        paddingLeft: "0.5vw",
        [theme.breakpoints.up("sm")]: {
            width: "33vw"
        }
    },
    boxesService: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            width: "33vw"
        }
    }
}));
const Contact = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    const history = useHistory();
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid
                container
                direction="column"
                spacing={9}
                style={{ width: "99vw" }}
            >
                <Grid item>
                    <Typography color="primary" variant="h3">
                        Get in Touch
                    </Typography>
                </Grid>

                <Grid item container style={{ paddingRight: 0 }}>
                    <Grid
                        item
                        container
                        direction="column"
                        spacing={5}
                        className={classes.boxesService}
                    >
                        <Grid item>
                            <Typography color="primary">
                                Seeing is believing
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => {
                                    history.push("/services");
                                }}
                            >
                                <Typography
                                    color="primary"
                                    style={{
                                        textDecoration: "underline",
                                        fontWeight: "bold",
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap"
                                    }}
                                >
                                    View All Services
                                    <ChevronRight
                                        className={classes.rightIcon}
                                    />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        className={classes.boxescontact}
                        direction="column"
                        spacing={3}
                    >
                        <Grid item>
                            <Typography
                                color="primary"
                                style={{ fontWeight: "bold" }}
                            >
                                Contact Details
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="primary">
                                Aditya Singh
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                color="primary"
                                style={{ fontWeight: "bold" }}
                            >
                                Email:
                            </Typography>
                            <Typography color="primary">
                                <Link
                                    href="mailto:adityasorot@gmail.com"
                                    color="inherit"
                                    underline="hover"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap"
                                    }}
                                >
                                    adityasorot@gmail.com
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        className={classes.boxeslocation}
                        spacing={2}
                    >
                        <Grid item>
                            <Typography
                                color="primary"
                                style={{ fontWeight: "bold" }}
                            >
                                My Location
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="primary">India</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="primary">
                                World Wide Web
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                color="primary"
                                style={{ fontWeight: "bold" }}
                            >
                                Follow Me
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
                                        const url =
                                            "http://www.github.com/reidnax";
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
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
