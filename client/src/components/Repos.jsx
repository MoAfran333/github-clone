import React from "react";
import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
  const widthClass = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";
  return (
    <div className={`${widthClass} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200">
        {repos.length === 0 ? (
          <p className="flex items-center justify-center h-32">
            No Repos Found
          </p>
        ) : (
          repos.map((repo) => <Repo key={repo.id} repo={repo} />)
        )}
      </ol>
    </div>
  );
};

export default Repos;
