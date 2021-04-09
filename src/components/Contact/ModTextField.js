import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        width: "70vw",
        "&$focused $notchedOutline": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main
            // backgroundColor: "rgba(40,60,70,0.4)"
        },
        "&$error $notchedOutline": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main
            // backgroundColor: "rgba(40,60,70,0.4)"
        },
        [theme.breakpoints.up("sm")]: {
            width: "30vw"
        }
    },
    focused: {},
    error: {},
    notchedOutline: {
        borderColor: theme.palette.secondary.main
    },
    input: {
        color: theme.palette.secondary.main
        // fontSize: "calc(0.5vh + 0.5vw)"
    },
    rootLabel: {
        color: theme.palette.secondary.main,
        "&$labelFocused": {
            color: theme.palette.secondary.main
            // backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    labelFocused: {}
}));
export const ModTextField = (props) => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                InputProps={{
                    classes: {
                        root: classes.root,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                        input: classes.input,
                        error: classes.error
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.rootLabel,
                        focused: classes.labelFocused
                    }
                }}
                variant="outlined"
                {...props}
            ></TextField>
        </div>
    );
};
