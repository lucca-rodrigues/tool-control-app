import { menuOptions, menuSecondaryOptions } from "./menuOptions";

export const handleScreeName = (path: string) => {
  const currentScreen =
    menuOptions.find((item) => item.screenName.includes(path)) ||
    menuSecondaryOptions.find((item) => item.screenName.includes(path));

  return currentScreen?.label ?? "Menu Principal";
};
