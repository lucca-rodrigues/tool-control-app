export const validateEmptyValues = ({ value }: any) => {
  return value ?? "";
};

export const validateEmptyArray = ({ value }: any) => {
  return value || [];
};

export const validateEmptyObject = ({ value }: any) => {
  return value ?? {};
};
