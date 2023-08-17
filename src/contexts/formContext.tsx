import { useContext, createContext } from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
interface IFormContext {
  watch: any;
  control: any;
  watchFields: any;
  setValue: any;
  register: any;
  errors: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
const FormContext = createContext({} as IFormContext);

const FormContextProvider = ({ children }: any) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const watchFields = watch();

  return (
    <FormContext.Provider
      value={{
        watch,
        control,
        watchFields,
        handleSubmit,
        setValue,
        register,
        errors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(FormContext);
};

export { FormContextProvider, useFormContext };
