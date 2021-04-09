import React from "react";
import DLModels from "./DLModels";
import ScriptWrite from "./ScriptWrite";
import ServiceIntro from "./ServiceIntro";
import SoftwareDesign from "./SoftwareDesign";

const ServicesBody = () => {
    return (
        <div>
            <ServiceIntro />
            <SoftwareDesign />
            <DLModels />
            <ScriptWrite />
        </div>
    );
};

export default ServicesBody;
