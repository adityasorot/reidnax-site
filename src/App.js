import { ThemeProvider } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleScrollF, toggleScrollT } from "./actions/mainActions";
import FooterBar from "./components/FooterBar/FooterBar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import HomeBody from "./components/Home/HomeBody";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

const App = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const endOfScroll = useSelector((state) => state.endOfScroll);
    const dispatch = useDispatch();
    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.screen.availHeight;
    };

    useEffect(() => {
        const trackScrolling = () => {
            const wrappedElement = document.getElementById("App");
            if (isBottom(wrappedElement)) {
                dispatch(toggleScrollT());
            } else {
                dispatch(toggleScrollF());
            }
        };
        document.addEventListener("scroll", trackScrolling);
        return () => {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, [dispatch]);
    useEffect(() => {
        console.log(endOfScroll);
    }, [endOfScroll]);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <div id="App">
                <HeaderBar scroll={endOfScroll} />
                <HomeBody />
                <FooterBar />
            </div>
        </ThemeProvider>
    );
};

export default App;
