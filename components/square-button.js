import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLORS } from '../colors';

const SquareButton = ({ name, type, size }) => {

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
        iconSizeStyle = 22;
    }

    return (
        <View style={styles.shadowWrapper}>
            <View style={[styles.button, btnSizeStyle]}>
                <Icon name={name} type={type} color={COLORS.text} size={iconSizeStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    small: {
        width: 35,
        height: 35,
    },
    medium: {
        width: 50,
        height: 50,
    },
    large: {
        width: 70,
        height: 70,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        borderRadius: 7,
        shadowColor: "#000", // Add black shadow in bottom right
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3,
        elevation: 7,
      },
      shadowWrapper: { // Add white shadow in top left
        shadowColor: "#FFF",
        shadowOffset: {
            width: -4,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 7,
      },
})

export default SquareButton;