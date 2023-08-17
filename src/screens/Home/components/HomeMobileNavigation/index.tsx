import { BottomNavigation, Divider } from "../../../../components";
import {
  Box,
  FlatList,
  Image,
  Stack,
  VStack,
  useTheme,
  Text,
  HStack,
  View,
} from "native-base";
import { Pressable } from "react-native";
import { menuOptions } from "../../../../utils/menuOptions";
import homeScreenHooks from "../../hooks/homeScreen";
import { platformWeb, platformWidth } from "../../../../utils";
import { Home } from "../../../../../assets/images";

export const HomeMobileNavigation = () => {
  const { colors } = useTheme();
  const { validateAndHandleLogout } = homeScreenHooks();

  return (
    <>
      <View
        flex={1}
        mb={1}
        _android={{
          bg: "#fff",
        }}
        _ios={{
          bg: "#fff",
        }}
      >
        {platformWeb && (
          <Pressable onPress={() => validateAndHandleLogout("home")}>
            <Stack direction="row" mt={2} alignItems="center" px={10}>
              <Box>
                <Image
                  source={Home}
                  alt="Logo Tool Control"
                  resizeMode="contain"
                  size="xs"
                  tintColor={platformWeb ? colors.white : colors.black}
                />
              </Box>
              <Text ml={5} _web={{ color: colors.white }}>
                Início
              </Text>
            </Stack>
          </Pressable>
        )}

        {/* Dynamic menu list */}
        <FlatList
          nestedScrollEnabled
          data={menuOptions}
          contentContainerStyle={{
            marginBottom: 100,
          }}
          renderItem={({ item, index }) => {
            return (
              <>
                <VStack mb={index === menuOptions?.length - 1 ? 3 : 0}>
                  {index === menuOptions?.length - 1 && (
                    <Box mt={1} mb={2}>
                      <Divider />
                    </Box>
                  )}
                  <Pressable
                    onPress={() =>
                      item?.screenName &&
                      validateAndHandleLogout(item?.screenName)
                    }
                  >
                    <Stack direction="row" mt={2} alignItems="center" px={10}>
                      <Box>
                        <Image
                          source={item?.icon}
                          alt="Logo Tool Control"
                          resizeMode="contain"
                          size="xs"
                          tintColor={platformWeb ? colors.white : colors.black}
                        />
                      </Box>
                      <Text ml={5} _web={{ color: colors.white }}>
                        {item?.label}
                      </Text>
                    </Stack>
                  </Pressable>
                </VStack>
              </>
            );
          }}
        />
      </View>
    </>
  );
};
