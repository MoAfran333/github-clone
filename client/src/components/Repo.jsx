import React from "react";
import { FaCodeBranch, FaCodeFork, FaCopy, FaRegStar } from "react-icons/fa6";
import { formatDate } from "../utils/dateFunction";
import { Language } from "../utils/constants.js";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
  const handleCloneClick = async (repo) => {
    try {
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("Repo URL cloned to Clipboard");
    } catch (e) {
      toast.error("Failed to Clone Repo URL to Clipboard");
    }
  };

  return (
    <li className="mb-10 ms-7">
      <span
        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-blue-100"
      >
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repo?.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repo?.name}
        </a>
        <span
          className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1"
        >
          <FaRegStar /> {repo?.stargazers_count}
        </span>
        <span
          className="bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCodeFork /> {repo?.forks}
        </span>
        <span
          onClick={() => handleCloneClick(repo)}
          className="cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCopy /> Clone
        </span>
      </div>

      <time
        className="block my-1 text-xs font-normal leading-none
			 text-gray-400"
      >
        Released on {formatDate(repo?.created_at)}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500">
        {repo?.description
          ? repo?.description.substring(0, 300)
          : "No Description Provided"}
      </p>
      {Language[repo?.language] ? (
        <img src={Language[repo?.language]} alt="Programming Language Icon" />
      ) : null}
    </li>
  );
};

export default Repo;
