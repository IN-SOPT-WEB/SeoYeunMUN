import Router from "./lib/router";
import { useState } from "react";
function App() {
  let [userIds, setUserIds] = useState([]);
  return (
    <Router userIds={userIds} setUserIds={setUserIds}>
      <div className="App"></div>
    </Router>
  );
}

export default App;
