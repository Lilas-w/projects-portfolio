import React from "react";
import { projects } from "../data";
import { Headers } from "./Header";
import { ProjectItem } from "./ProjectItem";


export const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <Headers text={`React Hooks Projects`} />
                <ProjectItem projects={projects.react} />
                <Headers text={`Vanilla JavaScript Projects`} />
                <ProjectItem projects={projects.js} />
            </div>
        </section>
    );
}