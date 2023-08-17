import {
  useContext,
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useNavigatorContext } from "./navigatorContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { authService } from "../services/authService";
import { getToken, platformAndroid, platformIOS, platformWeb } from "../utils";

interface IAuthContext {
  signIn: (data: any) => void;
  signOut: () => void;
  isLoggedUser: boolean | string;
  isInvalidUser: boolean | null;
}
const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = ({ children }: any) => {
  const { navigateTo } = useNavigatorContext();
  const [isLoggedUser, setIsLoggeUser] = useState<boolean | string>(true);
  const [isInvalidUser, setIsInvalidUser] = useState<boolean | null>(null);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    Promise.resolve(getToken())
      .then((token) => {
        if (token) {
          setToken(token);
          setIsLoggeUser(true);
          navigateTo("HomeScreen");
        }

        if (!token) {
          setToken(false);
          setIsLoggeUser(false);
        }
      })
      .catch((err) => {
        console.log("err:", err);
        setIsLoggeUser(false);
      });
  }, []);

  Promise.resolve(getToken())
    .then((token) => {
      if (token) {
        token = token;
        setIsLoggeUser(true);
      } else {
        setIsLoggeUser(false);
      }
    })
    .catch((err) => {
      console.log("err:", err);
    });

  async function signIn(data: any) {
    const response = await authService({ data });

    console.log("response:", response?.status);
    if (response?.status === true) {
      navigateTo("HomeScreen");
      // setIsLoggeUser(true);
      setIsInvalidUser(false);
      await AsyncStorage.setItem("@Tool_control:token", response?.token);
    } else {
      setIsInvalidUser(true);
      setIsLoggeUser(false);
    }
  }

  useEffect(() => {
    if (isLoggedUser && Platform.OS === "web") {
      navigateTo("HomeScreen");
    }
    navigateTo("HomeScreen");
  }, [isLoggedUser]);

  console.log("token:", token, "isLoggedUser:", isLoggedUser);

  // useMemo(() => {
  //   if (token && !token) {
  //     setIsLoggeUser(false);
  //   }

  //   if (platformWeb && !token) {
  //     setToken(null);
  //     setIsLoggeUser(false);
  //   }
  // }, [token]);

  async function signOut() {
    await AsyncStorage.removeItem("@Tool_control:loggedUser");
    await AsyncStorage.removeItem("@Tool_control:token");
    setIsLoggeUser(false);
    console.log("Deslogando usuário...");
    navigateTo("AuthScreen");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isLoggedUser,
        isInvalidUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
