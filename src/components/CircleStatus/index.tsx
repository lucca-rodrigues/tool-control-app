import { FontAwesome } from "@expo/vector-icons";
import { Icon, useTheme } from "native-base";

interface ICircleStatus {
  color: string;
  size?: number;
}

export const CircleStatus = ({ color, size }: ICircleStatus) => {
  return <Icon as={FontAwesome} name="circle" color={color} size={size ?? 7} />;
};
