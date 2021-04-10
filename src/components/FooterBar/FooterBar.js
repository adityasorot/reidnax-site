import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import { ChevronRight, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toggleScrollF, toggleScrollT } from "../../actions/mainActions";
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
                transform: "translateX(1.5vw)"
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
        zIndex: 100
    },
    icon: {
        color: theme.palette.secondary.main
    }
}));
const FooterBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleDrawerOpen = () => {
        setOpen(true);
        dispatch(toggleScrollT());
    };

    const handleDrawerClose = () => {
        setOpen(false);
        dispatch(toggleScrollF());
    };
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
    const history = useHistory();
    const d = new Date();
    const n = d.getFullYear();
    return (
        <div className={classes.grow}>
            <AppBar position="sticky" classes={{ root: classes.appBar }}>
                <Toolbar>
                    <Typography style={{ fontSize: "1rem" }} color="secondary">
                        Copyright © {n} Reidnax
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

export default FooterBar;
