import React from 'react';
import { StackedBarChart, LineChart } from 'react-native-chart-kit';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';

const StatisticsScreen = () => {
  const data = {
    labels: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
    legend: ['Red', 'Green'],
    data: [
      [60, 60],
      [30, 30],
      [40, 40],
      [30, 30],
      [60, 60],
    ],
    barColors: ['#FF5733', '#32CB2F'],
  };

  const chartConfig = {
    backgroundGradientFrom: '#FFF',
    //backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFF',
    //backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    //strokeWidth: 10, // optional, default 3
    barPercentage: 0.5,

    //useShadowColorFromDataset: false, // optional
  };

  return (
    <View>
      <StackedBarChart
        data={data}
        width={Dimensions.get('window').width}
        withHorizontalLabels={false}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default StatisticsScreen;
