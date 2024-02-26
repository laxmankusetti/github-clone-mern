import User from '../models/user.model.js';

export const getUserProfileAndRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const userProfile = await userRes.json();

    const reposRes = await fetch(userProfile.repos_url, {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      });
    const repos = await reposRes.json();

    res.status(200).json({
        userProfile,
        repos
    })

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const likeProfile = async (req,res) => {
  try {
    const { username } = req.params;
    const user = await User.findById(req.user._id.toString());
    const userToLike = await User.findOne({ username });

    if(!user){
      return res.status(404).json({message : 'User is not a member'})
    }
    if(user.likedProfile.includes(userToLike.username)){
      return res.status(400).json({message : 'User already liked'})
    }

    userToLike.likedBy.push({username : user.username, avatarUrl : user.avatarUrl, likedDate : Date.now()})
    user.likedProfile.push(userToLike.username);

    await Promise.all([userToLike.save(), user.save()])

    re.status(200).json({message : 'User liked'})
  } catch (error) {
    res.status(500).json({
      error : error.message
    })
  }
}

export const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({likedBy : user.likedBy})
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}