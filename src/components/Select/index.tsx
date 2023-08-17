import { CheckIcon, Select as SelectComponent } from "native-base";
import { useEffect } from "react";
import { useFormContext } from "../../contexts";

export const Select = ({
  options,
  defaultValue,
  name,
  label,
  placeholder,
}: any) => {
  const { watchFields, setValue } = useFormContext();

  const currentValue = watchFields[name];

  useEffect(() => {
    if (name && defaultValue) setValue(name, defaultValue);
  }, []);

  return (
    <SelectComponent
      selectedValue={currentValue}
      minWidth="150"
      height={8}
      _web={{ w: 12 }}
      accessibilityLabel={label}
      placeholder={placeholder}
      _selectedItem={{
        bg: "teal.600",
      }}
      mt={1}
      onValueChange={(itemValue) => setValue(name, itemValue)}
    >
      {options?.map((item: any, index: number) => (
        <SelectComponent.Item
          key={index}
          label={item?.label}
          value={item?.value}
        />
      ))}
    </SelectComponent>
  );
};
