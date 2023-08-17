import { useState } from "react";

import { Analysis, Pending, Performed } from "../Tabs";

export function useTabInventory() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "performed", title: "Realizados", component: Performed },
    { key: "pending", title: "Pendentes", component: Pending },
    { key: "analysis", title: "Em Análise", component: Analysis },
  ]);

  return {
    index,
    setIndex,
    routes,
  };
}
