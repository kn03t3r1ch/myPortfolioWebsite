import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import walls1 from "../img/Walls_6.png";
import meImg from "../img/MeIMG.png";
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading....</div>;
  return (
    <main>
      <img
        src={walls1}
        alt="Walls_6"
        className="absolute object-cover w-full h-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-100 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={meImg}
            alt="meImg"
            className="rounded w-32 h-auto lg:w-42 h-auto mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 text-6xl font-body2 mb-4">
              H'ola! I am <span className="text-blue-500">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-gray-600 font-body2">
              <BlockContent
                blocks={author.bio}
                projectId="yxls28zj"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

{
  /* <div className="p-2  container mx-auto relative">
        <section className="bg.gray-700 rounded-2xl shadow-2xl lg:flex p-20">
          <img src={me} className=" shadow-xl w-24 h-auto lg:w-32 lg:h-auto" />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="font-body2 text-6xl text-green-300 ml-4 mb-4">
              Helllloooooooo!!!!! I'm{" "}
              <span className="text-gray-600">{author.name}</span>
            </h1>
            <div class=" prose lg:prose-xl text-gray-500 ml-4">
              <BlockContent
                blocks={author.bio}
                projectId="yxls28zj"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div> */
}
