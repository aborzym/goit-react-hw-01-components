import Profile from "./Profile";
import user from "../data/user.json";

function App() {
  return (
    <>
      <h1>goit-react-hw-01-components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
