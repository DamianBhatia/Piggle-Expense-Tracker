import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLORS } from '../colors';


const RoundButton = ({ name, type, color, size }) => {

    // Determine size of button and icon (default size is small)
    let btnSizeStyle, iconSizeStyle;

    if (size === 'medium') {
        btnSizeStyle = styles.medium;
        iconSizeStyle = 35;
    } else if (size === 'large') {
        btnSizeStyle = styles.large;
        iconSizeStyle = 50;
    } else { 
        btnSizeStyle = styles.small; 
        iconSizeStyle = 24;
    }

    return (
        <View style={styles.shadowWrapper}>
            <View style={[styles.button, btnSizeStyle]}>
              <Icon name={name} type={type} color={color} size={iconSizeStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    small: {
        borderRadius: 20,
        width: 35,
        height: 35,
    },
    medium: {
        borderRadius: 30,
        width: 50,
        height: 50,
    },
    large: {
        borderRadius: 50,
        width: 70,
        height: 70,
    },
    shadowWrapper: {
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3,
        elevation: 7,
    },
})

export default RoundButton;