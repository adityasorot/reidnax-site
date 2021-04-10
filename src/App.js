import { ThemeProvider } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleScrollF, toggleScrollT } from "./actions/mainActions";
import FooterBar from "./components/FooterBar/FooterBar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import HomeBody from "./components/Home/HomeBody";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutBody from "./components/About/AboutBody";
import ServicesBody from "./components/Services/ServicesBody";
import ProjectsBody from "./components/Projects/ProjectsBody";
import ContactBody from "./components/Contact/ContactBody";
import Contact from "./components/Home/Contact";
import ScrollToTop from "./ScrollToTop";

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
        <Router>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <div id="App">
                    <HeaderBar scroll={endOfScroll} />
                    <ScrollToTop />
                    <Switch>
                        <Route
                            exact
                            path="/reidnax-site/"
                            component={HomeBody}
                        />
                        <Route
                            path="/reidnax-site/services"
                            component={ServicesBody}
                        />
                        <Route
                            path="/reidnax-site/about"
                            component={AboutBody}
                        />
                        <Route
                            path="/reidnax-site/projects"
                            component={ProjectsBody}
                        />
                        <Route
                            path="/reidnax-site/contact"
                            component={ContactBody}
                        />
                    </Switch>
                    <Contact />
                    <FooterBar />
                </div>
            </ThemeProvider>
        </Router>
    );
};

export default App;
