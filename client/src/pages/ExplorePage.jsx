import React, { useState } from "react";
import JavaScript from "../assets/javascript.svg";
import TypeScript from "../assets/typescript.svg";
import CPP from "../assets/c++.svg";
import Python from "../assets/python.svg";
import Java from "../assets/java.svg";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(
        `http://localhost:5000/api/explore/repos/${language}`
      );
      const { items } = await res.json();
      console.log("items : ", items);
      setRepos(items);
      if (language === "cpp") {
        setSelectedLanguage("c++");
      } else {
        setSelectedLanguage(language);
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

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
            onClick={() => exploreRepos("javascript")}
          />
          <img
            src={TypeScript}
            alt="TypeScript Logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("typescript")}
          />
          <img
            src={CPP}
            alt="C++ Logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("cpp")}
          />
          <img
            src={Python}
            alt="Python Logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("python")}
          />
          <img
            src={Java}
            alt="Java Logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("java")}
          />
        </div>
        {repos?.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-2">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full">
              {selectedLanguage.toUpperCase()}
            </span>{" "}
            Repositories
          </h2>
        )}
        {!loading && repos?.length > 0 && (
          <Repos repos={repos} alwaysFullWidth />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default ExplorePage;
