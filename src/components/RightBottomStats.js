import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RightBottomStats = ({ stats }) => {
    return (
        <View style={styles.container}>
            {stats.map((stat, index) => (
                <View
                    key={index}
                    style={[
                        styles.box,
                        stat.bgColor && { backgroundColor: stat.bgColor },
                        stat.fullWidth && { width: '100%' },
                    ]}
                >
                    <Text style={[styles.valueText, stat.valueStyle]}>{stat.value}</Text>
                    {stat.label ? (
                        <Text style={[styles.labelText, stat.labelStyle]}>{stat.label}</Text>
                    ) : null}

                    {stat.avatars && (
                        <View style={styles.avatarGroup}>
                            {stat.avatars.map((avatar, i) => (
                                <Image
                                    key={i}
                                    source={{ uri: avatar }}
                                    style={[
                                        styles.avatar,
                                        { marginLeft: i === 0 ? 0 : -12, zIndex: 10 - i },
                                    ]}
                                />
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        flexDirection: 'column',
        gap: 8,
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        width: 140,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
    valueText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    labelText: {
        fontSize: 12,
        color: '#777',
        marginTop: 4,
    },
    avatarGroup: {
        flexDirection: 'row',
        marginTop: 8,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: '#fff',
    },
});

export default RightBottomStats;
