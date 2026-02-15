import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Shanmukh", // default value
});

export default UserContext;
