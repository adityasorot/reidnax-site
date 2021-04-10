import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Code } from "@material-ui/icons";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import ItemPro from "../Home/ItemPro";
import fb from "../../assets/fb.png";
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
        width: "30vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "30vw"
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
        height: "9vh",
        width: "20vw",
        // padding: "calc( 0.7vh + 0.7vw )",
        color: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            height: "25vh",
            width: "20vw",
            padding: "calc( 0.7vh + 0.7vw )",
            color: theme.palette.secondary.main
        }
    },
    carousel: {
        width: "55vw",
        marginTop: "7vh",
        [theme.breakpoints.up("sm")]: {
            width: "64vw"
        }
    }
}));

const items = [
    {
        name: "Facebook Bot",
        backgroundImage: `url(${fb})`,
        description: "Automation of facebook"
    }
];

const ScriptWrite = () => {
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
                            variant="h4"
                            style={{ paddingLeft: "2vh" }}
                        >
                            Script Writting
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Code className={classes.icons} />
                    </Grid>
                    <Grid item>
                        <Typography color="secondary">
                            Create custom scripts to automate your tasks and
                            data extraction.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.carousel}>
                    <Carousel indicators={false}>
                        {items.map((item) => (
                            <ItemPro key={item} item={item} />
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    );
};

export default ScriptWrite;
