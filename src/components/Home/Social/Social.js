import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemCar from "./ItemCar";
import backgroundImage from "../../../assets/bgimage.jpg";
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: "black",
        width: "50vw",
        display: "block",
        position: "absolute",
        right: 0,
        padding: "calc( 1.5vh + 1.5vw )",
        zIndex: 5,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "black",
            width: "40vw",
            display: "block",
            position: "absolute",
            right: 0,
            padding: "calc( 1.5vh + 1.5vw )",
            zIndex: 5
        }
    },
    text: {
        color: "#FFFFFF",
        // color: theme.palette.primary.main,
        padding: "calc( 0.5vh + 0.5vw )"
    }
}));
const items = [
    {
        backgroundImage: `url(${backgroundImage})`
    }
];
const Social = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.box}>
                <Grid item>
                    <Typography className={classes.text} variant="h4">
                        Aditya Singh
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.text}>
                        A believer in learning by doing, I am constantly
                        exploring and pursuing what new possibilities I can
                        achieve with my knowledge.
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
                                const url = "http://www.twitter.com/theReidnax";
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
            <Carousel indicators={false}>
                {items.map((item) => (
                    <ItemCar key={item} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default Social;
