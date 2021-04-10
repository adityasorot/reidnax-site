import {
    AppBar,
    Button,
    Drawer,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Switch,
    Toolbar,
    Typography
} from "@material-ui/core";
import { ChevronRight, Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    toggleDarkMode,
    toggleScrollF,
    toggleScrollT
} from "../../actions/mainActions";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: theme.palette.primary.main
    },
    root: {
        [theme.breakpoints.up("md")]: {
            width: "3vw",
            height: "3vh",
            padding: 0,
            display: "flex"
        }
    },
    switchBase: {
        [theme.breakpoints.up("md")]: {
            padding: 0
        },
        color: theme.palette.secondary.light,
        "&$checked": {
            color: theme.palette.secondary.main,
            [theme.breakpoints.up("sm")]: {
                transform: "translateX(1.4vw)"
            }
        },
        "&$checked + $track": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    checked: {},
    track: { borderRadius: "4vh" },
    thumb: {
        [theme.breakpoints.up("md")]: {
            width: "calc( 1vh + 1vw )",
            height: "calc( 1vh + 1vw )",
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
    buttonText: { fontWeight: 700, fontSize: "0.9rem" },
    fab: {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        zIndex: 10000,
        display: (props) => (props.scroll ? "none" : "flex")
    },
    icon: {
        color: theme.palette.secondary.main
    }
}));

const HeaderBar = (props) => {
    const classes = useStyles(props);
    useEffect(() => {
        console.log(props);
    }, [props]);

    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        dispatch(toggleScrollT());
    };

    const handleDrawerClose = () => {
        setOpen(false);
        dispatch(toggleScrollF());
    };
    const history = useHistory();
    const ButtonList = [
        {
            name: "Home",
            func: () => {
                history.push("/reidnax-site/");
                handleDrawerClose();
            }
        },
        {
            name: "About",
            func: () => {
                history.push("/reidnax-site/about");
                handleDrawerClose();
            }
        },
        {
            name: "Services",
            func: () => {
                history.push("/reidnax-site/services");
                handleDrawerClose();
            }
        },
        {
            name: "Projects",
            func: () => {
                history.push("/reidnax-site/projects");
                handleDrawerClose();
            }
        }
    ];

    return (
        <div className={classes.grow}>
            <AppBar position="sticky" classes={{ root: classes.appBar }}>
                <Toolbar>
                    <Typography style={{ fontSize: "2rem" }} color="secondary">
                        Reidnax
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button
                            onClick={() => history.push("/reidnax-site/")}
                            style={{ padding: "1vh" }}
                            color="secondary"
                        >
                            Home
                        </Button>
                        <Button
                            onClick={() => history.push("/reidnax-site/about")}
                            style={{ padding: "1vh" }}
                            color="secondary"
                        >
                            About
                        </Button>
                        <Button
                            onClick={() =>
                                history.push("/reidnax-site/services")
                            }
                            style={{ padding: "1vh" }}
                            color="secondary"
                        >
                            Services
                        </Button>
                        <Button
                            onClick={() =>
                                history.push("/reidnax-site/projects")
                            }
                            style={{ padding: "1vh" }}
                            color="secondary"
                        >
                            Projects
                        </Button>
                        <Button
                            onClick={() =>
                                history.push("/reidnax-site/contact")
                            }
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
                            <Menu className={classes.icon} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.fab}>
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
                        <ChevronRight className={classes.icon} />
                    </IconButton>
                </div>
                <List>
                    {ButtonList.map((itr) => (
                        <ListItem button key={itr.name}>
                            <ListItemText
                                primary={
                                    <Typography color="secondary">
                                        {itr.name}
                                    </Typography>
                                }
                                onClick={itr.func}
                            />
                        </ListItem>
                    ))}
                </List>
                <div className={classes.grow} />

                <List>
                    <ListItem>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ marginBottom: "1.5vh" }}
                            onClick={() => {
                                history.push("/reidnax-site/contact");
                                handleDrawerClose();
                            }}
                        >
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
