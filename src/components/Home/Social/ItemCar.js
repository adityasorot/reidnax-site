import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundImage: (props) => props.item.backgroundImage,
        backgroundSize: "100vh",
        height: "60vh",
        [theme.breakpoints.up("sm")]: {
            backgroundImage: (props) => props.item.backgroundImage,
            backgroundSize: "140vh",
            height: "70vh"
        }
    }
}));

const ItemCar = (props) => {
    const classes = useStyles(props);
    return <Paper className={classes.paper}></Paper>;
};

export default ItemCar;
