import { HomeMobileNavigation } from "../../screens/Home/components/HomeMobileNavigation";
import { Box, Stack, Text, useTheme } from "native-base";
import { platformWidthContent } from "../../utils";

export const WebSidebarMenu = ({ children }: any) => {
  const { colors } = useTheme();

  return (
    <Stack direction="row" bg="#fff">
      <Box
        w="20%"
        h="100%"
        minHeight={1000}
        px={10}
        _web={{
          px: 0,
        }}
        py={10}
        bg={colors.primary[50]}
      >
        <HomeMobileNavigation />
      </Box>
      <Box flex={1}>
        <Box h={10} maxW={platformWidthContent} bg={colors.primary[100]} />
        <>{children}</>
      </Box>
    </Stack>
  );
};
