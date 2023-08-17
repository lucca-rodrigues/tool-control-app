import { Text } from "native-base";
import { View } from "react-native";

interface IRouteProps {
  key: string;
  title: string;
}

interface ILazyPlaceholderProps {
  route: IRouteProps;
}

const LazyPlaceholder = ({ route }: ILazyPlaceholderProps) => (
  <View>
    <Text>Loading {route.title}</Text>
  </View>
);

export const renderLazyPlaceholder = ({ route }: ILazyPlaceholderProps) => {
  return <LazyPlaceholder route={route} />;
};
