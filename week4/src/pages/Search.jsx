import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Search = () => {
  const navigate = useNavigate();
  let [userIds, setUserIds] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const handleSubmit = (userId) => {
    navigate(`/search/${userId}`);
    setIsShowing(false);
    if (!userIds.includes(userId)) {
      setUserIds([...userIds, userId]);
      console.log("did", userIds);
    }
  };
  //history를 눌렀을 때 blur가 되어서 사라지는 문제 해결
  const handleBlur = (event) => {
    console.log(event);
    if (!event.target.parentElement.contains(event.target)) {
      setIsShowing(false);
    }
  };
  return (
    <SearchArea>
      <Header>Search Github profile</Header>
      <form method="post" tabIndex={0}>
        <input
          type="text"
          name="github"
          autoComplete="off"
          onFocus={(e) => {
            if (userIds.length !== 0) setIsShowing(true);
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              let userId = e.target.value;
              handleSubmit(userId);
              e.target.value = "";
              e.target.blur();
            }
          }}
        />
        {isShowing && (
          <History
            tabIndex={1}
            userIds={userIds}
            setUserIds={setUserIds}
            setIsShowing={setIsShowing}
            navigate={navigate}
          />
        )}
      </form>
    </SearchArea>
  );
};

const History = (props) => {
  let { userIds, setUserIds, setIsShowing, navigate } = props;
  const handleDelete = (idToDelete) => {
    if (userIds.length === 0) {
      setIsShowing(false);
    } else {
      let temp = [...userIds];
      setUserIds(
        temp.filter((userId) => {
          return userId !== idToDelete;
        })
      );
    }
  };
  const handleNavigate = (userId) => {
    navigate(`/search/${userId}`);
  };
  return (
    <ul>
      {userIds.map((userId) => {
        return (
          <li
            key={userId}
            onClick={(e) => {
              handleNavigate(userId);
            }}
          >
            <span>{userId}</span>
            <button
              onClick={(e) => {
                e.target === e.currentTarget && handleDelete(userId);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Search;

const SearchArea = styled.div`
  background-color: #ffe7afb8;
  border-radius: 10px;
  width: 30rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;
const Header = styled.header`
  font-weight: bold;
  padding: 1rem;
`;
