import { Button, Grid,  makeStyles, Typography } from "@material-ui/core";
import {
    ChevronRight,
    Code,
    Computer,
    DeveloperMode
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            paddingTop: "13vh",
            paddingBottom: "13vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            paddingTop: "13vh",
            paddingBottom: "13vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    rightIcon: {
        color: theme.palette.secondary.main
    },
    icons: {
        height: "15vh",
        width: "10vw",
        color: theme.palette.secondary.main
    }
}));
const Services = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    const history = useHistory();
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid container direction="column" spacing={5}>
                <Grid item container>
                    <Grid
                        item
                        container
                        direction="column"
                        style={{ width: "50vw" }}
                    >
                        <Grid item>
                            <Typography color="secondary">What I Do</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="secondary" variant="h3">
                                Services
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        style={{ width: "30vw" }}
                        alignItems="flex-end"
                    >
                        <Grid item>
                            <Button
                                onClick={() => {
                                    history.push("/services");
                                }}
                            >
                                <Typography
                                    color="secondary"
                                    style={{
                                        textDecoration: "underline",
                                        fontWeight: "bold",
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap"
                                    }}
                                >
                                    View All Services
                                    <ChevronRight
                                        className={classes.rightIcon}
                                    />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item container style={{ width: "30vw" }}>
                        <Grid item>
                            <DeveloperMode className={classes.icons} />
                        </Grid>
                        <Grid item style={{ width: "30vw" }}>
                            <Typography color="secondary" variant="h6">
                                Software Design
                            </Typography>
                            <Typography color="secondary">
                                Custom software providing exactly what you need
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container style={{ width: "30vw" }}>
                        <Grid item>
                            <Computer className={classes.icons} />
                        </Grid>
                        <Grid item style={{ width: "30vw" }}>
                            <Typography color="secondary" variant="h6">
                                ML / DL Models
                            </Typography>
                            <Typography color="secondary">
                                Deploy Machine learning and Deep learning
                                models.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container style={{ width: "27vw" }}>
                        <Grid item>
                            <Code className={classes.icons} />
                        </Grid>
                        <Grid item style={{ width: "30vw" }}>
                            <Typography color="secondary" variant="h6">
                                Script Writting
                            </Typography>
                            <Typography color="secondary">
                                Create custom scripts to automate your tasks and
                                data extraction.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;
