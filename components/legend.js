import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import { COLORS } from '../colors.js';

const Legend = ({ data }) => {
    return (
        <View style={styles.legend}>
            {data.map((item, key) => (
                <View key={key}>
                    <View style={styles.legendItem}>
                        <View style={styles.legendLeft}>
                            <View style={{ width: 25, height: 25, borderRadius: 7, backgroundColor: item.color, marginHorizontal: 10}}></View>
                            <Text style={styles.legendText}>{item.x}</Text>
                        </View>
                        <View style={styles.legendRight}>
                            <Text style={styles.legendNumbers}>{item.y} CAD</Text>
                        </View>
                    </View>
                    <Divider style={{backgroundColor: COLORS.text}}/>
                </View>))}
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default Legend;