import { useNavigatorContext } from "../../contexts";
import { Box, Icon, Image, Stack, Text, useTheme } from "native-base";
import { LogoHeader } from "../../../assets/images";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/routers";
import { useNavigation } from "@react-navigation/native";

export const HeaderApp = () => {
  const { colors } = useTheme();
  const { screenName, navigation, navigateTo } = useNavigatorContext();

  return (
    <Pressable onPress={() => navigateTo("home")}>
      <Stack
        direction="row"
        px={5}
        mt={7}
        pt={5}
        pb={5}
        space={3}
        bg={colors.primary[50]}
        alignItems="center"
      >
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon as={FontAwesome} name="bars" color={colors.white} size={8} />
        </Pressable>

        <Box style={{ flex: 1 }}>
          <Image source={LogoHeader} alt={"Alt Image"} w="100%" h={35} />
          <Text color={colors.white}>{screenName}</Text>
        </Box>
      </Stack>
    </Pressable>
  );
};
