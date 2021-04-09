import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import ItemPro from "../Home/ItemPro";
import backgroundImage from "../../assets/bgimage.jpg";
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
        height: "25vh",
        width: "20vw",
        color: theme.palette.primary.main
    },
    carousel: {
        width: "55vw",
        [theme.breakpoints.up("sm")]: {
            width: "64vw"
        }
    }
}));

const items = [
    {
        name: "itemName",
        backgroundImage: `url(${backgroundImage})`,
        description: "itemDescription"
    }
];

const WebAppsDev = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid container justify="space-between">
                <Grid item className={classes.carousel}>
                    <Carousel indicators={false}>
                        {items.map((item) => (
                            <ItemPro key={item} item={item} />
                        ))}
                    </Carousel>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    classes={{ root: classes.introPara }}
                    spacing={1}
                >
                    <Grid item>
                        <Typography color="primary" variant="h4">
                            Web Apps
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary">
                            Some of my Web applications
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default WebAppsDev;
