import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  let [userIds, setUserIds] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const handleSubmit = (userId) => {
    navigate(`/search/${userId}`);
    setIsShowing(false);
    if (userIds.includes(userId)) return;
    setUserIds([...userIds, userId]);
  };
  return (
    <>
      <form
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          let userId = e.target[0].value;
          handleSubmit(userId);
          e.target[0].value = "";
          e.target[0].blur();
        }}
      >
        <input
          type="text"
          name="github"
          onFocus={(e) => {
            setIsShowing(true);
          }}
          onBlur={() => {
            setIsShowing(false);
          }}
        />
      </form>
      {isShowing && (
        <History
          userIds={userIds}
          setUserIds={setUserIds}
          setIsShowing={setIsShowing}
          navigate={navigate}
        />
      )}
    </>
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
            onClick={(e) => {
              handleNavigate(userId);
            }}
          >
            <span>{userId}</span>
            <button
              onClick={() => {
                handleDelete(userId);
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
