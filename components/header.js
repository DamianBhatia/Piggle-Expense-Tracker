import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { COLORS } from '../colors.js';
import SquareButton from './square-button';

const Header = ({ title, navigation, status }) => {

    // add shadow to header if parent is scrolling
    const containerStyle = status ? styles.scrollContainer : styles.container;

    return (
      <View style={containerStyle}>
          <Text style={styles.title}>{title}</Text>
          <SquareButton name="menu" type="feather" color={COLORS.text} size="small" func={navigation.openDrawer} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.background,
    },
    scrollContainer: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.background,
        shadowColor: "#000", // Add black shadow
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 7,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
    },
})

export default Header;