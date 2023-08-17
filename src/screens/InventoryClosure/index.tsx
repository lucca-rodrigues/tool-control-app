import { BottomNavigation, TemplateWebPages } from "../../components";
import { VStack } from "native-base";
import { platformWeb } from "../../utils";
import { Content } from "./components/Content";

export const InventoryClosureScreen = () => {
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
