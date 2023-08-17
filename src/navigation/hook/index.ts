import { menuOptions } from "../../utils";
export default function navigationHooks() {
  const excludeItems = [
    "ActivesScreen",
    "HistoryScreen",
    "HistoricoAtivo",
    "Dashboard",
    "Notificacoes",
    "GestaoDeAtivos",
    "Desinvestimento",
    "Movimentacao",
  ];

  const includeItems = ["Retooling", "Inventory"];

  // const isLoggedUserScreensWeb = menuOptions.filter(
  //   (item) => item?.screenName && !excludeItems.includes(item.screenName)
  // );

  // console.log({ isLoggedUserScreensWeb });
  return {
    includeItems,
    excludeItems,
    // isLoggedUserScreensWeb,
  };
}
