"use client";

import { getUser } from "@/actions/fetch-data.action";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getUser()
      .then((user) => {
        setIsAuthenticated("email" in user ? true : false);
      })
      .catch((error) => {
        console.error(error);
        setIsAuthenticated(false);
      });
  }, []);

  return <AuthContext value={{ isAuthenticated }}>{children}</AuthContext>;
};
