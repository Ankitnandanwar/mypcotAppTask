import { View, Text, Image } from 'react-native'
import React from 'react'

const SmallBoxImg = ({item}) => {
    return (
        <View style={[styles.rightInfoBox, { backgroundColor: item.buttonColor }]}>
            <Text style={styles.infoText}>
                <Text style={styles.boldText}>{item.primaryStat.label}</Text>
            </Text>
            <View style={styles.avatarContainer}>
                {item.primaryStat.avatars?.map((avatar, index) => (
                    <Image
                        key={index}
                        source={{ uri: avatar }}
                        style={[
                            styles.avatarImage,
                            {
                                marginLeft: index === 0 ? 0 : -12,
                                zIndex: 10 - index,
                                borderColor: item.buttonColor,
                            },
                        ]}
                    />
                ))}
            </View>


        </View>
    )
}

const styles = {
    rightInfoBox: {
        position: 'absolute',
        top: -7,
        right: 32,
        height: 80,
        backgroundColor: '#E6613E',
        borderRadius: 12,
        padding: 12,
        paddingRight: 16,
        width: 160,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        zIndex: 5,

    },
    infoText: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
    },

    boldText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
    },

    avatarContainer: {
        position: 'absolute',
        bottom: -20,
        left: 28,
        flexDirection: 'row',
        zIndex: 10,

    },
    avatarImage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 2,
        borderColor: '#fff',
    },
}

export default SmallBoxImg