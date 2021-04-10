import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import fb from "../../assets/fb.png";
import site from "../../assets/site.png";
import ml from "../../assets/ml.png";
import webapp from "../../assets/webapp.jpeg";
import ItemPro from "./ItemPro";
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
    },
    rightIcon: {
        color: theme.palette.primary.main
    },
    projects: {
        width: "40vw",
        [theme.breakpoints.up("sm")]: {
            width: "30vw"
        }
    },
    carousel: {
        width: "45vw",
        [theme.breakpoints.up("sm")]: {
            width: "64vw"
        }
    }
}));

const items = [
    {
        name: "InvoMag",
        backgroundImage: `url(${webapp})`,
        description: "Invoice Management"
    },
    {
        name: "Facebook Bot",
        backgroundImage: `url(${fb})`,
        description: "Automation of facebook"
    },
    {
        name: "Payment Prediction",
        backgroundImage: `url(${ml})`,
        description: "Predict next payment date"
    },
    {
        name: "This Site",
        backgroundImage: `url(${site})`,
        description: "Created My PortFolio"
    }
];

const Projects = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    const history = useHistory();

    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid container>
                <Grid
                    item
                    container
                    direction="column"
                    spacing={1}
                    className={classes.projects}
                >
                    <Grid item>
                        <Typography color="primary">Most Recent</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" variant="h3">
                            Projects
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary">
                            These are some of my bests.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() => {
                                history.push("/projects");
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
                                View All Projects
                                <ChevronRight className={classes.rightIcon} />
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item className={classes.carousel}>
                    <Carousel indicators={false} animation="slide">
                        {items.map((item) => (
                            <ItemPro key={item} item={item} />
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;
