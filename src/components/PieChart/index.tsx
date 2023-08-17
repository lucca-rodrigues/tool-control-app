import { FontAwesome } from "@expo/vector-icons";
import { platformAndroid, platformIOS, platformWidth } from "../../utils";
import { Box, FlatList, Icon, Stack, Text, useTheme } from "native-base";
import { PieChart as Chart } from "react-native-chart-kit";

type DataType = {
  name?: string;
  quantity: number;
  color: string;
};
interface IPieChart {
  data: Array<DataType>;
  title?: string;
  w?: number;
  h?: number;
  border?: boolean;
  accessor: string;
}
export const PieChart = ({
  data,
  w,
  h,
  border,
  title,
  accessor,
  ...props
}: IPieChart) => {
  const { colors } = useTheme();
  return (
    <Stack
      flexDirection="row"
      px={4}
      py={4}
      maxW={platformWidth}
      style={
        border && {
          borderColor: colors.success[50],
          borderWidth: 1,
          borderRadius: 10,
        }
      }
    >
      <Stack>
        <Text>{title}</Text>
        <Box>
          <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={({ item }) => (
              <Stack flexDirection="row" alignItems="center" py={2} pl={2}>
                <Box w={4} h={4} bg={item?.color} />
                <Text ml={2}>{`${item?.quantity}% - ${item?.name}`}</Text>
              </Stack>
            )}
          />
        </Box>
      </Stack>
      <Box ml={-7}>
        <Chart
          data={data}
          chartConfig={{
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            backgroundColor: "transparent",
          }}
          width={w ?? 170}
          height={h ?? 100}
          backgroundColor="transparent"
          paddingLeft={platformAndroid ? 10 : 5}
          center={[0, 0]}
          hasLegend={false}
          accessor={accessor}
          absolute
          {...props}
        />
      </Box>
    </Stack>
  );
};
