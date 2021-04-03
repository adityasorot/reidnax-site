import React from "react";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Services from "./Services";
import Social from "./Social/Social";

const HomeBody = () => {
    return (
        <div>
            <Introduction />
            <Social />
            <Projects />
            <Services />
            <Contact />
        </div>
    );
};

export default HomeBody;
