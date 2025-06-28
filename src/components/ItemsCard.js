import { View, Pressable, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import SmallBoxImg from './SmallBoxImg';
import RightBottomStats from './RightBottomStats';
import OrdersStats from './OrderStats';
import SubscriptionsStats from './SubscriptionStats';
import CustomersStats from './CustomerStats';

const { width } = Dimensions.get('window');

const ItemsCard = ({ item }) => {
    const SvgImage = item.imagesource;
    return (
        <Pressable style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.header}>
                <View style={styles.statBox}>
                    <SvgImage width={140} height={140} />
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={[styles.customButton, { backgroundColor: item.buttonColor }]}>
                        <Text style={styles.buttonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SmallBoxImg item={item} smallboxstyle={{ top: -7, right: 16 }} />

            {/* <OrdersStats item={item} /> */}
            {item.id === 'orders' && <OrdersStats item={item} />}
            {item.id === 'subscriptions' && <SubscriptionsStats item={item} />}
            {item.id === 'customers' && <CustomersStats item={item} />}


        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width - 32,
        height: 260,
        borderRadius: 20,
        margin: 12,
        padding: 16,
        flexDirection: 'row',
        position: 'relative',
    },
    header: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statBox: {
        width: 140,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 80,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginTop: 20,
    },
    customButton: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'Roboto-Medium',
        fontSize: 13,
    },



})

export default ItemsCard