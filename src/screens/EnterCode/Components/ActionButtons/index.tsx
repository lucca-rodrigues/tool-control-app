import { Button } from "../../../../components";
import { HStack } from "native-base";
import { useNavigatorContext } from "../../../../contexts";

export function ActionsButtons() {
  const { navigateTo } = useNavigatorContext();
  return (
    <HStack space={2} justifyContent="space-between" p={2}>
      <Button
        ml={-2}
        w="49%"
        py={1.5}
        px={5}
        onPress={() => navigateTo("InventoryScreen")}
        variant="outline"
        label="Cancelar"
        borderColor="#008B9C"
        colorText="#008B9C"
      />
      <Button
        w="49%"
        py={1.5}
        px={5}
        onPress={() => {}}
        backgroundColor="#BFBFBF"
        label="Inventariar"
      />
    </HStack>
  );
}
