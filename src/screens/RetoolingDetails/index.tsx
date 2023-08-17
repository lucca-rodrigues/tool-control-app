import { BottomNavigation, TemplateWebPages } from "../../components";
import { VStack } from "native-base";
import { platformWeb } from "../../utils";
import { Content } from "./Components/Content";
export const RetoolingDetailsScreen = () => {
  return (
    <>
      <VStack flex={1}>
        {platformWeb ? (
          <TemplateWebPages>
            <Content />
          </TemplateWebPages>
        ) : (
          <>
            <Content />
            <BottomNavigation />
          </>
        )}
      </VStack>
    </>
  );
};
