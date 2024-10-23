import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("UseEffect in AuthContext is running");
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/check", {
          credentials: "include",
        });
        const data = await res.json();
        setAuthUser(data.user);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
