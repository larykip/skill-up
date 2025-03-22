'use client'
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("signin");
  const [user, setUser] = useState(null);
  const router = useRouter()

  //
  const openModal = (formType) => {
    setActiveForm(formType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser()
  }, [])

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "GET",
      });
      setUser(null);
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ isOpen, activeForm, openModal, closeModal, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthContext);
