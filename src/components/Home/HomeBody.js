import React from "react";
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
        </div>
    );
};

export default HomeBody;
