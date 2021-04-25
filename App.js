import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { VictoryPie } from 'victory-native';

import { COLORS } from './colors.js';
import SquareButton from './components/square-button';
import RoundButton from './components/round-button';
import Legend from './components/legend';

export default function App() {

  const data = [
      { x: "Grocery", y: 500, color: '#600080' },
      { x: "Entertainment", y: 4000, color: '#c61cff' },
      { x: "Subscriptions", y: 70, color: '#9900cc' },
      { x: "Other", y: 7000, color: '#d966ff' },
      { x: "Travel", y: 851, color: '#ecb3ff' }
  ];

  const colorScale = ['#600080', '#9900cc', '#c61cff', '#d966ff', '#ecb3ff'];

  // TODO: calculate from data
  const totalExpense = 12421;

  return (
    /* Dashboard Title and Menu Button */
    <ScrollView style={styles.container}>

      <View style={styles.topContainer}>
        <Text style={styles.title}>Dashboard</Text>
        <SquareButton name="menu" type="feather" color={COLORS.text} size="small" />
      </View>
      
      {/* Current Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>BALANCE</Text>
        <Text style={styles.balanceAmount}>$32,465</Text>
        <Text style={styles.date}>April 2021</Text>
      </View>

      {/* Income and Expense Icons with Values */}
      <View style={styles.iconSection}>
        <View style={styles.section}>
          <RoundButton name="arrow-up-right" type="feather" color={COLORS.income} size="small" />
          <View style={styles.textSection}>
            <Text style={styles.iconHeader}>INCOME</Text>
            <Text style={styles.cashAmount}>$42,500</Text>
          </View>
        </View>

          <View style={styles.section}>
            <RoundButton name="arrow-down-left" type="feather" color={COLORS.expense} size="small" />
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
          data={data}
          height={310}
          colorScale={colorScale}
          padAngle={5}
          innerRadius={70}
          labels={({ datum }) => `${((datum.y / totalExpense) * 100).toFixed(1)}%`}
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
      <Legend data={data} />
    </ScrollView>
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
  legend: {
    marginTop: -20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingVertical: 10,
  },
  legendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2
  },
  legendRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: 5
  },
  legendText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500'
  },
  legendNumbers: {
    color: COLORS.text
  },
});