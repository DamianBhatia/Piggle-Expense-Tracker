import React from 'react';
import { Avatar, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { COLORS } from './colors.js';
import { VictoryContainer, VictoryPie } from 'victory-native';

export default function App() {

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
        <VictoryPie 
          data={[
            { x: "Grocery", y: 18 },
            { x: "Entertainment", y: 17 },
            { x: "Subscriptions", y: 30 },
            { x: "Other", y: 20 },
            { x: "Travel", y: 15 }
          ]}
          height={310}
          colorScale={['#600080', '#9900cc', '#c61cff', '#d966ff', '#ecb3ff']}
          padAngle={5}
          innerRadius={70}
          labels={({ datum }) => `${datum.y}%`}
          style={{
            labels: {
              fontFamily: 'Avenir',
              fontWeight: '500',
              fill: COLORS.text
            }
          }}
        />
      </View>

      {/* Legend of chart */}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  breakdownTitle: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 30,
  },
});
