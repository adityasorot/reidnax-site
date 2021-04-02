import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
    palette: {
        type: false ? "light" : "dark"
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: red
    }
});
