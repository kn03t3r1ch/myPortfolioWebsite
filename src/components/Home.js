import React from "react";
import wallsHome from "../img/Walls_2.png";

export default function Home() {
  return (
    <main>
      <img
        src={wallsHome}
        alt="Walls"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-64 lg:pt-128 px-8">
        <h1 className="text-9xl font-body2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-900 leading-none lg:leading-snug">
          !
        </h1>
      </section>
    </main>
  );
}
