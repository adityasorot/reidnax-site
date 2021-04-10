import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
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
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh"
        }
    },
    introDesp: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "50vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "50vw"
        }
    },
    icons: {
        color: theme.palette.primary.main
    },
    button: {
        marginLeft: "1.7vw",
        width: "25vw",
        height: "5vh",
        marginTop: "1vh",
        [theme.breakpoints.up("sm")]: {
            marginLeft: "1.7vw",
            width: "10vw",
            height: "5vh"
        }
    }
}));
const GitHubMore = () => {
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
                    <Typography
                        color="secondary"
                        variant="h3"
                        style={{ paddingLeft: "2vh" }}
                    >
                        You can explore more of my projects on my GitHub Profile
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                            const url = "http://www.github.com/reidnax";
                            window.open(url, "_blank");
                        }}
                    >
                        <GitHub className={classes.icons} />
                        <Typography
                            color="primary"
                            style={{ paddingLeft: "1vw" }}
                        >
                            GitHub
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default GitHubMore;
