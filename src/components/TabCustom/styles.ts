import { StyleSheet, StatusBar, ActivityIndicatorBase } from "react-native";
import { LinearGradient } from "react-native-svg";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    minWidth: "100%",
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 40,
    minHeight: 40,
    marginHorizontal: 10,
  },
  tabItemActive: {
    backgroundColor: "#fff",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  tabItemInactive: {
    backgroundColor: "#dee1e6",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  tabItemText: {
    fontSize: 13,
    fontWeight: "700",
  },
});
