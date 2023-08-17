import { SceneMap } from "react-native-tab-view";

export interface IRenderScene {
  key: string;
  title: string;
  component: () => JSX.Element;
}

export interface IRenderSceneMap {
  listRenderTabs: IRenderScene[];
}

let objSceneCurrent = {};

function formatSceneMap(listRenderScene: IRenderScene[]) {
  listRenderScene.map((item) => {
    const objCurrent = {
      [item.key]: item.component,
      component: item.component,
    };

    objSceneCurrent = {
      ...objSceneCurrent,
      ...objCurrent,
    };
  });
}

export function renderSceneFormatList({ listRenderTabs }: IRenderSceneMap) {
  formatSceneMap(listRenderTabs);

  const renderSeneMap = SceneMap(objSceneCurrent);

  return renderSeneMap;
}
