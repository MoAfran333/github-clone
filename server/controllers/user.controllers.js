import User from "../models/user.model.js ";

export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const userProfile = await userRes.json();

    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repoData = await repoRes.json();

    res.status(200).json({ userProfile, repoData });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const likeProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findById(req.user._id.toString());
    console.log("Auth user : ", user);
    const userToLike = await User.findOne({ username });

    if (!userToLike) {
      return res
        .status(404)
        .json({ error: "User is Not a Member of this App" });
    }

    if (user.likedProfile.includes(userToLike.username)) {
      return res.status(400).json({ error: "User Already Liked" });
    }

    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now(),
    });
    user.likedProfile.push(userToLike.username);

    // await user.save()
    // await userToLike.save()      // This can take some time so to save time we use Promise.all([])
    await Promise.all([user.save(), userToLike.save()]);
    res.status(200).json({ message: "User Liked" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({ likedBy: user.likedBy });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};
