import React from "react";
import { FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TfiThought } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import {
  RiUserFollowLine,
  RiUserFollowFill,
  RiGitRepositoryFill,
} from "react-icons/ri";
import { formatMemberSince } from "../utils/dateFunction";

const ProfileInfo = ({ userProfile }) => {
  // const userProfile = {
  //   avatar_url:
  //     "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
  //   email: "johndoe@gmail.com",
  //   followers: 100,
  //   following: 200,
  //   html_url: "https://github.com/burakorkmez",
  //   location: "Somewhere, Earth",
  //   name: "John Doe",
  //   public_gists: 100,
  //   public_repos: 100,
  //   twitter_username: "johndoe",
  //   login: "johndoe",
  // };

  const memberSince = formatMemberSince(userProfile?.created_at);

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        {/* User Avatar and Github Link */}
        <div className="flex gap-3 items-center">
          <a href={userProfile?.html_url} target="_blank" rel="norefferer">
            <img
              src={userProfile?.avatar_url}
              className="rounded-md w-24 h-24 mb-2"
              alt=""
            />
          </a>
          <div className="flex gap-2 items-center flex-cols">
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="norefferer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/* User Bio Details */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* User Location Details */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ) : null}

        {/* Twitter User Since */}
        {userProfile?.twitter_username ? (
          <a
            href={`https://twitter.com/${userProfile.twitter_username}`}
            target="_blank"
            rel="norefferer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ) : null}

        {/* Member Since Date */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member Since</p>
          <p className="text-white">{memberSince}</p>
        </div>

        {/* Email Address */}
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Email Address</p>
            <p className="">{userProfile?.email}</p>
          </div>
        )}

        {/* Full Name */}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Full Name</p>
            <p className="">{userProfile?.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p className="">{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/* Public Repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public Repos: {userProfile?.public_repos}</p>
        </div>

        {/* Public Gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public Gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
