import { Center, Spinner } from "native-base";

export const Loader = () => {
  return (
    <Center flex={1}>
      <Spinner size="lg" />
    </Center>
  );
};
