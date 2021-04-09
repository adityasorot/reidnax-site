import React from "react";
import WebAppsDev from "./WebAppsDev";
import ProjectsIntro from "./ProjectsInto";
import Websites from "./Websites";
import ScriptsDev from "./ScriptsDev";
import DLModelsDev from "./DLModelsDev";
import GitHubMore from "./GitHubMore";

const ProjectsBody = () => {
    return (
        <div>
            <ProjectsIntro />
            <Websites />
            <WebAppsDev />
            <ScriptsDev />
            <DLModelsDev />
            <GitHubMore />
        </div>
    );
};

export default ProjectsBody;
