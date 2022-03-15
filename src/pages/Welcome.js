import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>welcome page</h2>
      <Route path="/welcome/new-user">
        <p>welcome, new user</p>
      </Route>
    </div>
  );
};

export default Welcome;
