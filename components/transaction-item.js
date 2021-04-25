import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { COLORS } from '../colors.js';


const TransactionItem = ({ key, item: { trans_name, category, amount, date } }) => {

    // Determine color if income or expense
    const amountStyle = amount >= 0 ? styles.income : styles.expense; 

    return (
        <View key={key} style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>{trans_name}</Text>
                <Text style={styles.category}>{category}</Text>
            </View>

            <View style={styles.right}>
                <Text style={amountStyle}>{amount.toFixed(2)}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 3,
    },
    left: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    name: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: '500'
    },
    category: {
        paddingTop: 5,
        color: COLORS.text,
        fontSize: 15,
    },
    income: {
        color: COLORS.income,
        fontSize: 20,
        fontWeight: '500'
    },
    expense: {
        color: COLORS.expense,
        fontSize: 20,
        fontWeight: '500'
    },
    date: {
        paddingTop: 5,
        color: COLORS.text
    },
})

export default TransactionItem;