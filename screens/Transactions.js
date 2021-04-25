import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { COLORS } from '../colors.js';
import Header from '../components/header';
import TransactionItem from '../components/transaction-item';

const Transactions = ({ navigation }) => {

    // state of Header to add shadow when scrolling
    const [shadow, setShadow] = useState(false);

    const data = [
        {category: 'Grocery', trans_name: 'Sobeyes Shopping', amount: -256.87, date: '4/5/2021'},
        {category: 'Entertainment', trans_name: 'Movie Tickets', amount: -30.65, date: '4/12/2021'},
        {category: 'Work Cheque', trans_name: 'Work Cheque', amount: 56.28, date: '4/18/2021'},
        {category: 'Subscriptions', trans_name: 'Amazon Prime', amount: -10.00, date: '4/19/2021'},
        {category: 'Online Sale', trans_name: 'Sold Shoes', amount: 60.99, date: '4/19/2021'},
        {category: 'Work', trans_name: 'New Laptop', amount: -780.45, date: '4/23/2021'},
        {category: 'Subscriptions', trans_name: 'Netflix', amount: -10.29, date: '4/24/2021'},
        {category: 'Grocery', trans_name: 'NoFrills Shopping', amount: -79.47, date: '4/26/2021'},
        {category: 'Work Cheque', trans_name: 'Work Cheque', amount: 49.50, date: '4/26/2021'},
        {category: 'Grocery', trans_name: 'Shoppers', amount: -116.78, date: '4/28/2021'},
        {category: 'Work Cheque', trans_name: 'Work Cheque', amount: 64.12, date: '5/11/2021'},
        {category: 'Subscriptions', trans_name: 'NBA League Pass', amount: -10.78, date: '5/16/2021'},
        {category: 'Work Cheque', trans_name: 'Work Cheque', amount: 76.29, date: '5/18/2021'},
        {category: 'Entertainment', trans_name: 'JBL Speakers', amount: -89.93, date: '5/20/2021'},
        {category: 'Takeout', trans_name: 'Panda Express', amount: -12.59, date: '5/20/2021'},
        {category: 'Work Cheque', trans_name: 'Work Cheque', amount: 40.58, date: '5/29/2021'},
    ];

    return (
        <ScrollView style={styles.container} 
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}
                    onScroll={event => event.nativeEvent.contentOffset.y >= 20 ? setShadow(true) : setShadow(false)}>

            <Header title="Transactions" navigation={navigation} status={shadow}/>

            {/* List all transactions inside of data */}
            {data.map((item, key) => <TransactionItem key={key} item={item} />)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
})

export default Transactions;