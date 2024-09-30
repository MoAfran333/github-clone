import React from "react";
import JavaScript from "../assets/javascript.svg";
import TypeScript from "../assets/typescript.svg";
import CPP from "../assets/c++.svg";
import Python from "../assets/python.svg";
import Java from "../assets/java.svg";

const ExplorePage = () => {
  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img
            src={JavaScript}
            alt="JavaScript Logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            src={TypeScript}
            alt="TypeScript Logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            src={CPP}
            alt="C++ Logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            src={Python}
            alt="Python Logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            src={Java}
            alt="Java Logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
