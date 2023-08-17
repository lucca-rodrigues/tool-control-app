import { Box, useTheme, View, VStack } from "native-base";
import { WebSidebarMenu } from "../WebSidebarMenu";

export const TemplateWebPages = ({ children }: any) => {
  const { colors } = useTheme();
  return (
    <VStack>
      <WebSidebarMenu>{children}</WebSidebarMenu>
    </VStack>
  );
};
