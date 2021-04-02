import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.background.paper
    },
    textColot: {
        color: "blue"
    }
}));
const HeaderBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" classes={{ root: classes.appBar }}>
            <Toolbar>
                <IconButton edge="start">
                    <Menu />
                </IconButton>
                <Typography color="textPrimary">Reidnax</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
