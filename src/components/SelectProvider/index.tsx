import { CheckIcon, Select } from "native-base";
import { useFormContext, useProviderContext } from "../../contexts";

interface ISelectProvider {
  whiteMode?: boolean;
}
export const SelectProvider = ({ whiteMode }: ISelectProvider) => {
  const { setValue } = useFormContext();
  const { currentProvider, providerData } = useProviderContext();

  return (
    <Select
      selectedValue={currentProvider}
      minWidth="150"
      height={8}
      accessibilityLabel="Selecione um fornecedor"
      placeholder="Selecione"
      _selectedItem={{
        bg: "teal.600",
      }}
      color={whiteMode ? "#fff" : null}
      mt={1}
      onValueChange={(itemValue) => setValue("provider", itemValue)}
    >
      {providerData?.map((item) => (
        <Select.Item key={item?.id} label={item?.name} value={item?.name} />
      ))}
    </Select>
  );
};
