import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import getGithubProfile from "../lib/api";
import styled from "styled-components";

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
    <Main>
      <Delbtn onClick={() => {}}>
        <Link to="/search">X</Link>
      </Delbtn>
      <Figure>
        <Img src={userdata.avatar_url} alt="githubProfile" />
        <button>
          <a href={userdata.html_url}>Visit {userId}</a>
        </button>
      </Figure>
      <Section>
        <Article>
          <h3>following</h3>
          {userdata.following}
        </Article>
        <Article>
          <h3>followers</h3>
          {userdata.followers}
        </Article>
      </Section>
    </Main>
  );
};

export default Profile;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  height: 15rem;
  width: 15rem;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
`;
const Article = styled.article`
  padding: 20px;
`;
const Main = styled.main`
  background-color: #ffe7afb8;
`;
const Delbtn = styled.button`
  margin-left: auto;
  display: block;
  background-color: unset;
`;
