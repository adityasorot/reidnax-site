import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Body from "./components/Home/Body";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

const App = () => {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <HeaderBar />
            <Body />
        </ThemeProvider>
    );
};

export default App;
