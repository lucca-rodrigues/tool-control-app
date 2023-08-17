import { CheckIcon, Select, View } from "native-base";
import { useFormContext, useProviderContext } from "../../contexts";
import { PieChart as Chart } from "react-native-chart-kit";

interface IMiniPieChart {
  data: any;
  width?: number | string;
  height?: number | string;
}
export const MiniPieChart = ({ data, width, height }: IMiniPieChart) => {
  return (
    <View style={{ flex: 1 }}>
      <Chart
        data={data}
        width={width || "100%"}
        height={height || "100%"}
        chartConfig={{
          decimalPlaces: 2,
          // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          color: () => `#fff`,
          backgroundColor: "#fff",
        }}
        style={{
          backgroundColor: "#fff!important",
        }}
        center={[-50, 1]}
        accessor="quantity"
        paddingLeft={50}
        hasLegend={false}
        absolute
      />
    </View>
  );
};
