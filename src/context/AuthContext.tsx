import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      {
        email,
        password,
      }
    );

    const { token, ...userData } = res.data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signup = async (name, email, password) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      {
        name,
        email,
        password,
      }
    );

    const { token, ...userData } = res.data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && !user) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data.data);
        })
        .catch(() => {
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, login, signup, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
