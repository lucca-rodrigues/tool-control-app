import { useNavigatorContext } from "../../contexts";
import { Button, Stack, Text, Box, Image } from "native-base";
import { Pressable } from "react-native";
import {
  Home,
  LogoPoweredBy,
  Notifications,
  Hamburger,
  PrevPage,
} from "../../../assets/images";
import { Divider } from "../Divider";
import { DrawerActions } from "@react-navigation/routers";

export const BottomNavigation = () => {
  const { navigateTo, navigation, navigateToPrevPage } = useNavigatorContext();
  return (
    <>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#fff"
        px={2}
        h={60}
      >
        <Pressable onPress={() => navigateToPrevPage()}>
          <Button bgColor="#f1f5f4" borderRadius={150} h={35} w={35} disabled>
            <Image
              source={PrevPage}
              alt={"Alt Image"}
              resizeMode="center"
              size="xs"
            />
          </Button>
        </Pressable>
        <Box>
          <Button
            bgColor="#f1f5f4"
            borderRadius={150}
            h={35}
            w={35}
            onPress={() => navigateTo("home")}
          >
            <Image
              source={Home}
              alt={"Alt Image"}
              resizeMode="center"
              size="xs"
            />
          </Button>
        </Box>
        <Box>
          <Pressable>
            <Image
              source={LogoPoweredBy}
              alt={"Alt Image"}
              resizeMode="contain"
              size="lg"
            />
          </Pressable>
        </Box>
        <Box>
          <Button
            bgColor="#f1f5f4"
            borderRadius={150}
            h={35}
            w={35}
            onPress={() => console.log("Redirecionar para Notificacões")}
          >
            <Image
              source={Notifications}
              alt={"Alt Image"}
              resizeMode="center"
              size="xs"
            />
          </Button>
        </Box>
        <Box>
          <Button
            bgColor="#f1f5f4"
            borderRadius={150}
            h={35}
            w={35}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={Hamburger}
              alt={"Alt Image"}
              resizeMode="center"
              size="xs"
            />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
