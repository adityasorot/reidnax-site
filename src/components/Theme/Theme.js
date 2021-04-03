import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, red, yellow } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: blue,
        secondary: yellow
    },
    overrides: {
        MuiButton: {
            label: {
                textTransform: "none"
            }
        },
        MuiTypography: {
            body1: {
                textTransform: "none"
            }
        }
    }
});

export const darkTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: yellow,
        secondary: blue
    },
    overrides: {
        MuiButton: {
            label: {
                textTransform: "none"
            }
        },
        MuiTypography: {
            body1: {
                textTransform: "none"
            }
        }
    }
});
