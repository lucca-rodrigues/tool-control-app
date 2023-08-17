import React from "react";
import { useTheme, VStack, Icon as IconComponent, Box } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

interface IIcon {
  name: string;
  color?: string;
  size?: number;
}

export const Icon = ({ name, color, size }: any) => {
  const { colors } = useTheme();

  return (
    <Box>
      <Icon
        as={FontAwesome}
        name={name}
        // color={color ?? colors.primary[200]}
        // size={size ?? 7}
      />
    </Box>
  );
};
