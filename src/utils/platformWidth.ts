import { Dimensions } from "react-native";

export const platformWidth = Dimensions.get("window").width;
export const platformHeight = Dimensions.get("window").height;
export const platformWidthContent = Dimensions.get("window").width - 300;
