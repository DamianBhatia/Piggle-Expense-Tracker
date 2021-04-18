import React from 'react';
import { Avatar, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { COLORS } from './colors.js';
import { LineChart, PieChart } from 'react-native-chart-kit';

export default function App() {

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(236,179,255, 0.7)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "rgba(153,0,204, 0.7)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "rgba(96,0,128, 0.7)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "rgba(198,28,255, 0.7)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgba(217,102,255, 0.7)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  return (
    // Top bar with Dashboard and Menu Icon
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.menuWrapper}>
          <View style={styles.menu}>
            <Icon name="menu" type="feather" color={COLORS.text} />
          </View>
        </View>
      </View>
      
      {/* Main balance area */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>BALANCE</Text>
        <Text style={styles.balanceAmount}>$32,465</Text>
        <Text style={styles.date}>April 2021</Text>
      </View>

      {/* Income and Outcome Icons with Values */}
      <View style={styles.iconSection}>
        <View style={styles.section}>
          <View style={styles.arrowWrapper}>
            <View style={styles.arrow}>
              <Icon name="arrow-up-right" type="feather" color={COLORS.income} />
            </View>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.iconHeader}>INCOME</Text>
            <Text style={styles.cashAmount}>$42,500</Text>
          </View>
        </View>

          <View style={styles.section}>
            <View style={styles.arrowWrapper}>
              <View style={styles.arrow}>
                <Icon name="arrow-down-left" type="feather" color={COLORS.expense} />
              </View>
            </View>
            <View style={styles.textSection}>
              <Text style={styles.iconHeader}>EXPENSE</Text>
              <Text style={styles.cashAmount}>$12,421</Text>
            </View>
          </View>
      </View>

      {/* Pie Chart area with breakdown of spending */}
      <View style={styles.chartView}>
        <Text style={styles.breakdownTitle}>Monthly Summary</Text>
          <PieChart 
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[80, 10]}
            hasLegend={false}
          />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  menu: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
    	width: 4,
    	height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3,
    elevation: 7,
  },
  menuWrapper: {
    shadowColor: "#FFF",
    shadowOffset: {
    	width: -4,
    	height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 7,
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  date: {
    fontSize: 15,
    color: COLORS.text,
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 35,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    color: COLORS.text,
  },
  cashAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
  },
  textSection: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowWrapper: {
    shadowColor: "#FFF",
    shadowOffset: {
    	width: -4,
    	height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 7,
    marginRight: 10,
  },
  arrow: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
    	width: 4,
    	height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3,
    elevation: 7,
  },
  chartView: {
  
  },
  breakdownTitle: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 30,
  },
});
