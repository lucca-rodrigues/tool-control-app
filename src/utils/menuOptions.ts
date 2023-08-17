import {
  Inventariar,
  Movimentacao,
  Desinvestimento,
  Retooling,
  GestaoDeAtivos,
  Notificacoes,
  Dashboard,
  HistoricoAtivo,
  HistoricoFornecedor,
  Ativos,
  Sair,
  Home,
} from "../../assets/images";

export const menuOptions = [
  {
    label: "Inventariar",
    icon: Inventariar,
    screenName: "InventoryScreen",
  },
  {
    label: "Solicitar Movimentação",
    icon: Movimentacao,
    screenName: "Movimentacao",
  },
  {
    label: "Solicitar Desinvestimento",
    icon: Desinvestimento,
    screenName: "Desinvestimento",
  },
  {
    label: "Solicitar Retooling",
    icon: Retooling,
    screenName: "RetoolingScreen",
  },
  {
    label: "Comunicar Gestão de Ativos",
    icon: GestaoDeAtivos,
    screenName: "GestaoDeAtivos",
  },
  {
    label: "Notificações",
    icon: Notificacoes,
    screenName: "Notificacoes",
  },
  {
    label: "Meu Dashboard",
    icon: Dashboard,
    screenName: "Dashboard",
  },
  {
    label: "Histórico do Ativo",
    icon: HistoricoAtivo,
    screenName: "HistoricoAtivo",
  },
  {
    label: "Histórico do Fornecedor",
    icon: HistoricoFornecedor,
    screenName: "HistoryScreen",
  },
  {
    label: "Lista de Ativos / Cadastros",
    icon: Ativos,
    screenName: "ActivesScreen",
  },
  {
    label: "Sair (Log Off)",
    icon: Sair,
    screenName: "AuthScreen",
  },
];

export const menuSecondaryOptions = [
  {
    label: "Retooling - Home",
    icon: Retooling,
    screenName: "RetoolingScreen",
  },
  {
    label: "Retooling - Selecionar Itens",
    icon: null,
    screenName: "RetoolingItemsScreen",
  },
  {
    label: "Retooling - Selecionar Itens",
    icon: null,
    screenName: "RetoolingItemsReviewScreen",
  },
  {
    label: "Retooling - Detalhe do Item",
    icon: null,
    screenName: "RetoolingDetailsScreen",
  },
  {
    label: "Retooling - Consulta Itens Selecionados",
    icon: null,
    screenName: "RetoolingApprovedScreen",
  },
  {
    label: "Digitar Código",
    icon: null,
    screenName: "EnterCodeScreen",
  },
  {
    label: "Encerramento do Inventário",
    icon: null,
    screenName: "InventoryClosureScreen",
  },
];
