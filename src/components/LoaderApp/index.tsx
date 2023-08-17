import { Splash } from "../../../assets/images";
import { Box, Center, Image, Spinner } from "native-base";

export const LoaderApp = () => {
  return (
    <Center flex={1}>
      <Box>
        <Image
          source={Splash}
          alt="Logo PoweredBy"
          resizeMode="contain"
          width={380}
        />
        {/* <Spinner size="lg" /> */}
      </Box>
    </Center>
  );
};
