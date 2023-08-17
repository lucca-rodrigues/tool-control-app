import { MachineImg } from "../../../assets/images";
import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { ImageSourcePropType, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { platformWidth } from "../../utils";
import { useNavigatorContext } from "../../contexts";

interface ICardItems {
  caf: string;
  name: string;
  status: string;
  inventoryId: number;
  image?: ImageSourcePropType;
  success?: boolean;
  analysis?: boolean;
}
export const CardItems = ({
  caf,
  name,
  status,
  success,
  analysis,
  image,
}: ICardItems) => {
  const { navigateTo } = useNavigatorContext();
  const { colors } = useTheme();
  const successColor = colors.success[100];
  const warningColor = colors.warning[50];
  const navigation = useNavigation();

  const drawerNavigation = navigation.getParent("InventoryDrawer");

  return (
    <Pressable onPress={() => analysis && navigateTo("EnterCodeScreen")}>
      <HStack alignItems="center" flex={1} px={1} py={2}>
        <Box
          alignItems="center"
          justifyContent="center"
          borderColor={success ? successColor : warningColor}
          borderWidth={5}
          borderRadius={150}
          h={60}
          w={60}
          mr={4}
        >
          <Image
            source={image ?? MachineImg}
            alt={"Alt Image"}
            w={50}
            h={50}
            borderRadius={150}
          />
        </Box>

        <Stack minW={260} maxW={260}>
          <HStack space={2}>
            <Text>{caf}</Text>
            <Text fontWeight="bold">{status}</Text>
          </HStack>

          <Box>
            <Text fontSize={13}>{name}</Text>
          </Box>
        </Stack>
        <Center minWidth={55}>
          <Pressable
            onPress={() =>
              drawerNavigation?.dispatch(DrawerActions?.openDrawer())
            }
          >
            <Icon
              as={FontAwesome}
              name="ellipsis-v"
              color={colors.primary[200]}
              size={7}
              alignItems="center"
            />
          </Pressable>
        </Center>
      </HStack>
    </Pressable>
  );
};
