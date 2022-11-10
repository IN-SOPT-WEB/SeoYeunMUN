import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getGithubProfile from "../lib/api";
import { styled } from "styled-components";

const Profile = () => {
  const { userId } = useParams();
  const [userdata, setUserdata] = useState({
    html_url: "",
    following: 0,
    followers: 0,
  });
  //params 받아오고 UseEffect 시작
  useEffect(() => {
    const getUserData = async () => {
      const newUserdata = await getGithubProfile(userId);
      setUserdata(newUserdata);
    };
    getUserData();
  }, [userId]);
  return (
    <>
      <figure>
        <img src={userdata.avatar_url} alt="githubProfile" />
        <button>
          <a href={userdata.html_url}>Visit {userId}</a>
        </button>
      </figure>
      <article>
        <h3>following</h3>
        {userdata.following}
      </article>
      <article>
        <h3>followers</h3>
        {userdata.followers}
      </article>
    </>
  );
};

export default Profile;
