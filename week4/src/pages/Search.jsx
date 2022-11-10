import getGithubProfile from "../lib/api";
import Profile from "./Profile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  let [userIds, setUserIds] = useState([]);
  const sendGithubUserID = (userId) => {
    setUserIds([...userIds, userId]);
    navigate(`/search/${userId}`);
  };
  return (
    <form
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        let userId = e.target[0].value;
        sendGithubUserID(userId);
        e.target[0].value = "";
      }}
    >
      <input type="text" name="github" />
    </form>
  );
};

export default Search;
