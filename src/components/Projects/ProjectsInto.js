import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
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
    }
}));
const ProjectsIntro = () => {
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
                        color="primary"
                        variant="h3"
                        style={{ paddingLeft: "2vh" }}
                    >
                        The Projects from which you can see the quality of my
                        work...
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProjectsIntro;
