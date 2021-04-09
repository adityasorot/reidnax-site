import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import MainForm from "./MainForm";
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
        [theme.breakpoints.up("sm")]: {
            padding: "calc( 5vh + 5vw )"
        }
    }
}));
const ContactForm = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid
                container
                direction="column"
                classes={{ root: classes.introPara }}
                spacing={1}
                alignItems="center"
            >
                <Grid item>
                    <Typography
                        color="secondary"
                        variant="h4"
                        style={{ padding: "calc( 1vh + 1vw )" }}
                    >
                        Send me a message
                    </Typography>
                </Grid>
                <Grid item>
                    <MainForm />
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactForm;
