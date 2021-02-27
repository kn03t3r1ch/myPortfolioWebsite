import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-1 px-3 mr-4 rounded text-gray-100 hover:text-gray-700 text-6xl font-body2 font-bold tracking-widest"
            activeClassName="text-red-500  font-body2 font-bold bg-gray-100 my-1"
          >
            Lucas
          </NavLink>

          <NavLink
            to="/project"
            className="inline-flex items-center py-1 px-4 my-1 rounded text-red-200 hover:text-gray-700 font-body2 font-bold"
            activeClassName="text-red-500 bg-gray-100"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-1 px-4 my-1 rounded text-red-200 hover:text-gray-700 font-body2 font-bold"
            activeClassName="text-red-500 bg-gray-100"
          >
            BlogPost
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center py-1 px-4 my-1 rounded text-red-200 hover:text-gray-700 font-body2 font-bold"
            activeClassName="text-red-500 bg-gray-100"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.instagram.com/rocket_raoul/?hl=de"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCQqgDrDXWHdxG96ABtKHorw"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
