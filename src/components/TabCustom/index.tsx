import { Dispatch, SetStateAction, useState } from "react";
import { Dimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import { handleIndexChange } from "./functions/handleIndexChange";
import { renderLazyPlaceholder } from "./functions/renderLazyPlaceholder";
import { IRenderScene, renderSceneFormatList } from "./functions/renderScene";
import { renderTabBar } from "./functions/renderTabBar";

interface ITabCustom {
  listRenderTabs: IRenderScene[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  routes: { key: string; title: string }[];
}

/**
 * TabCustom
 * @param listRenderTabs: IRenderScene[] - List of tabs to be rendered
 * @param index: number - Index of the current tab
 * @param setIndex: Dispatch<SetStateAction<number>> - Function to change the index of the current tab
 * @param routes: { key: string; title: string }[] - List of routes to be rendered
 * @return JSX.Element
 * @example
 * <TabCustom
 *  listRenderTabs={listRenderTabs}
 * index={index}
 * setIndex={setIndex}
 * routes={routes}
 * />
 */
export function TabCustom({
  listRenderTabs,
  index,
  routes,
  setIndex,
}: ITabCustom) {
  const renderScene = renderSceneFormatList({
    listRenderTabs,
  });

  const [tabActivity, setTabActivity] = useState(0);

  function handleTabActivity(index: number) {
    setIndex(index);
    setTabActivity(index);
  }

  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={(props) =>
        renderTabBar({ props, routes, handleTabActivity, tabActivity })
      }
      onIndexChange={(index: number) =>
        handleIndexChange({ index, handleTabActivity })
      }
      renderLazyPlaceholder={({ route }) => renderLazyPlaceholder({ route })}
      initialLayout={{ width: Dimensions.get("window").width }}
    />
  );
}
