import { BottomNavigation, TemplateWebPages } from "../../components";
import { Center, VStack } from "native-base";
import { platformWeb } from "../../utils";
import { Content } from "./Components/Content";

export const RetoolingItemsReviewScreen = () => {
  return (
    <>
      <VStack flex={1}>
        {platformWeb ? (
          <TemplateWebPages>
            <Center>
              <Content />
            </Center>
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
