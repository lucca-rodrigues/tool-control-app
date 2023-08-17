import { Box, Center, Image, Stack, Text, useTheme } from "native-base";
import { TextInput, InputPassword, Button } from "../../components";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Logo } from "../../../assets/images";
import { useFormContext, useAuthContext } from "../../contexts";
import { platformWeb, platformIOS } from "../../utils/platformTypes";

export const LoginScreen = () => {
  const { handleSubmit, setValue } = useFormContext();
  const { signIn, isInvalidUser } = useAuthContext();
  const { colors } = useTheme();

  return (
    <Center flex={1} bg="#fff">
      <Stack
        flex={1}
        space={4}
        px={10}
        pt={10}
        w={platformWeb ? "30%" : "100%"}
        maxHeight={platformWeb ? "80%" : "80%"}
      >
        <KeyboardAvoidingView
          behavior={platformIOS ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={platformIOS ? 0 : 4}
        >
          <ScrollView style={{ flex: 1 }}>
            <Stack flex={1} space={4}>
              <Center pb={10}>
                <Image
                  source={Logo}
                  alt="Logo Tool Control"
                  w={platformWeb ? 330 : 300}
                  h={platformWeb ? 150 : 128}
                  resizeMode="contain"
                />
              </Center>

              <TextInput
                label="Usuário"
                onChangeText={(value: string) => setValue("email", value)}
                errorMessage={isInvalidUser && "Usuário ou senha inválidos"}
                isRequired
              />

              <InputPassword
                label="Senha"
                onChangeText={(value: string) => setValue("password", value)}
                errorMessage={isInvalidUser && "Usuário ou senha inválidos"}
                isRequired
              />

              <Box w={"100%"}>
                <Text
                  underline
                  textAlign="right"
                  mt={1.5}
                  color={colors.primary[50]}
                >
                  Esqueceu sua senha?
                </Text>
              </Box>

              <Button
                w="100%"
                alignSelf="center"
                label="LOGIN"
                onPress={handleSubmit(signIn)}
              />
            </Stack>
          </ScrollView>
        </KeyboardAvoidingView>
      </Stack>
    </Center>
  );
};
