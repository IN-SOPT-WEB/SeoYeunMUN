import axios from "axios";

async function getGithubProfile(userId) {
  const response = await axios.get(`https://api.github.com/users/${userId}`);
  return response.data;
}
export default getGithubProfile;
