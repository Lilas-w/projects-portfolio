import React from 'react';
export const ProjectItem = ({ projects }) => {
    return (
        <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
                <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-100 p-4">
                    <div className="flex relative">
                        <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1 m-3">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            <object><a href={project.github}><button className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full my-6">代码与文档</button></a></object>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}