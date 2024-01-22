import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [booksData, setBooksData] = useState("");

  // adding token in local storage..
  const storeTokeninLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  //logout logic and deleting token
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // getting user data jwt authontication

  const userAuthentication = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Full user response:", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("error from jwt store middleware", error);
    }
  };

  // getting book data

  const getBookData = async () => {
    try {
      const response = await fetch("http://localhost:5000/bookdata", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setBooksData(data.msg);
      }
    } catch (error) {
      console.log(`error from frontend bookdata store ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await userAuthentication(token);
    };

    getBookData();
    fetchData();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ storeTokeninLS, LogoutUser, isLoggedIn, user, booksData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used out site of the provider");
  }
  return authContextValue;
};
