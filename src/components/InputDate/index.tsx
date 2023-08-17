import React from "react";
import { Input, Text, View, useTheme, VStack, Icon, Box } from "native-base";
import { TextInputMask } from "react-native-masked-text";
import { useFormContext } from "../../contexts";
import { FontAwesome } from "@expo/vector-icons";

interface IInput {
  label?: string;
  onChange: (e: any) => any;
  rest?: any;
  width: string | number;
}

export const InputDate = ({ name, label, width, ...rest }: any) => {
  const { colors } = useTheme();
  const { watchFields, setValue } = useFormContext();

  return (
    <VStack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      w={width ?? "100%"}
    >
      <Box>
        <Icon
          as={FontAwesome}
          name="calendar"
          color={colors.primary[200]}
          size={5}
        />
      </Box>
      <Box ml={1}>
        <TextInputMask
          type="datetime"
          options={{
            format: "DD/MM/YY",
          }}
          value={watchFields[name]}
          includeRawValueInChangeText
          onChangeText={(value) => {
            setValue(name, value);
          }}
          placeholder="DD/MM/YY"
          style={{
            height: 30,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: colors.primary[200],
            fontSize: 14,
            textAlign: "center",
            color: colors.primary[200],
            // backgroundColor: colors.primary[100],
          }}
          minWidth={width ?? 100}
          {...rest}
        />
      </Box>
    </VStack>
  );
};
