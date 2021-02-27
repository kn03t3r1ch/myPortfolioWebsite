import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import wallsProject from "../img/Walls_5.png";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <img
        src={wallsProject}
        alt="Walls_5"
        className="static absolute object-cover w-full h-full"
      />
      <section className="container mx-auto">
        <h1 className="text-6xl flex justify-center font-body2 font-medium">
          Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 font-body2 text-1xl">
          Welcome to my ProjectPage
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-500 text-3xl font-body2 mb-2 hover:text-red-500">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-medium font-body2 space-x-4">
                  <span>
                    <strong className="font-body2 font-medium">
                      Finished on
                    </strong>
                    : {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-body2 font-medium">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-body2 font-medium">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 font-body2 font-thin leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:undeline hover:text-red-400 text-xl font-body2"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

{
  /* <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-6xl flex justify-center font-body2 font-medium">
          Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 font-body2 text-1xl">
          Welcome to my ProjectPage
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-500 text-3xl font-body2 mb-2 hover:text-red-500">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-medium font-body2 space-x-4">
                  <span>
                    <strong className="font-body2 font-medium">
                      Finished on
                    </strong>
                    : {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-body2 font-medium">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-body2 font-medium">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 font-body2 font-thin leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:undeline hover:text-red-400 text-xl font-body2"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main> */
}
