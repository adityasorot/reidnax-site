import {
    AppBar,
    Button,
    Divider,
    Drawer,
    Fab,
    FormControlLabel,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Switch,
    Toolbar,
    Typography
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../../actions/mainActions";
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: theme.palette.primary.main
    },
    root: {
        [theme.breakpoints.up("sm")]: {
            width: "5vw",
            height: "3vh",
            padding: 0,
            display: "flex"
        }
    },
    switchBase: {
        [theme.breakpoints.up("sm")]: {
            padding: 0
        },
        color: theme.palette.secondary.light,
        "&$checked": {
            color: theme.palette.secondary.main,
            [theme.breakpoints.up("sm")]: {
                transform: "translateX(2.5vw)"
            }
        },
        "&$checked + $track": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    checked: {},
    track: { borderRadius: "4vh" },
    thumb: {
        [theme.breakpoints.up("sm")]: {
            width: "2.5vw",
            height: "3vh",
            boxShadow: "none"
        }
    },
    labelRoot: {
        color: theme.palette.primary.main,
        fontSize: "0.875rem",
        paddingLeft: theme.spacing(1)
    },
    darkModeFab: {
        backgroundColor: theme.palette.primary.main
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawer: {
        // width: drawerWidth,
        // flexShrink: 0
    },
    drawerPaper: {
        // width: drawerWidth
        backgroundColor: theme.palette.primary.main
    },
    buttonText: { fontWeight: 700, fontSize: "0.9rem" }
}));
const HeaderBar = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.grow}>
            <AppBar position="sticky" classes={{ root: classes.appBar }}>
                <Toolbar>
                    <Typography style={{ fontSize: "2rem" }} color="secondary">
                        Reidnax
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button style={{ padding: "1vh" }} color="secondary">
                            Home
                        </Button>
                        <Button style={{ padding: "1vh" }} color="secondary">
                            About
                        </Button>
                        <Button style={{ padding: "1vh" }} color="secondary">
                            Services
                        </Button>
                        <Button style={{ padding: "1vh" }} color="secondary">
                            Projects
                        </Button>
                        <Button
                            style={{ padding: "1vh" }}
                            variant="contained"
                            color="secondary"
                        >
                            <Typography
                                color="primary"
                                className={classes.buttonText}
                            >
                                Contact Me
                            </Typography>
                        </Button>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            color="secondary"
                            edge="start"
                            onClick={handleDrawerOpen}
                        >
                            <Menu />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    margin: 0,
                    top: "auto",
                    right: 20,
                    bottom: 20,
                    left: "auto",
                    position: "fixed"
                }}
            >
                <Fab
                    variant="extended"
                    color="primary"
                    style={{ padding: "3vh", borderRadius: "4vh" }}
                >
                    <Typography style={{ padding: "1vh" }} color="secondary">
                        SURPRISE
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={() => dispatch(toggleDarkMode())}
                        classes={{
                            root: classes.root,
                            switchBase: classes.switchBase,
                            checked: classes.checked,
                            track: classes.track,
                            thumb: classes.thumb
                        }}
                        // inputProps={{ height: "20vh", width: "20vw" }}
                    />
                </Fab>
            </div>
            <Drawer
                className={classes.drawer}
                // variant="persistent"
                anchor="right"
                open={open}
                // open={true}
                onClose={handleDrawerClose}
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRight />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {["Home", "About", "Services", "Projects"].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon> */}
                                <ListItemText
                                    primary={
                                        <Typography color="secondary">
                                            {text}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        )
                    )}
                </List>
                <div className={classes.grow} />

                <List>
                    <ListItem>
                        <Button variant="contained" color="secondary">
                            <Typography
                                className={classes.buttonText}
                                color="primary"
                            >
                                Contact Me
                            </Typography>
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default HeaderBar;
