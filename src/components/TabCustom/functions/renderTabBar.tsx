import { SceneRendererProps } from "react-native-tab-view";
import { Animated, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

interface IRenderTabBarProps {
  tabActivity: number;
  handleTabActivity: (index: number) => void;
  props: SceneRendererProps;
  routes: { key: string; title: string }[];
}

export const renderTabBar = ({
  tabActivity,
  handleTabActivity,
  routes,
  props,
}: IRenderTabBarProps) => {
  const inputRange = routes.map((x, i) => i);

  return (
    <View style={styles.tabBar}>
      {routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          ),
        });

        return (
          <TouchableOpacity
            key={route.key}
            style={
              tabActivity === i
                ? { ...styles.tabItemActive, ...styles.tabItem }
                : { ...styles.tabItemInactive, ...styles.tabItem }
            }
            onPress={() => handleTabActivity(i)}
          >
            <Animated.Text style={{ ...styles.tabItemText, opacity }}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
