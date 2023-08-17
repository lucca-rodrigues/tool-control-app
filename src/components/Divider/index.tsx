import { Divider as DividerComponent, useTheme } from "native-base";

export const Divider = () => {
  const { colors } = useTheme();

  return <DividerComponent bg={colors.success[50]} />;
};
