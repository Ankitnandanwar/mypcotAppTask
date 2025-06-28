import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OrderCreatedIcon from '../icons/Group 900.svg';


const OrderCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>New order created</Text>
          <Text style={styles.subtitle}>New Order created with Order</Text>
          <View style={styles.timeRow}>
            <Text style={styles.time}>09:00 AM</Text>
            <Ionicons name="arrow-forward-outline" size={18} color="#FE804E" />
          </View>
        </View>
        <View style={styles.iconBox}>
          <OrderCreatedIcon width={60} height={60} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 20,
    paddingHorizontal: 28,
    paddingVertical: 20,
    height: 180,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
    fontFamily: "Roboto-SemiBold",
    color: '#2C3D63'
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 12,
  },
  timeRow: {
    flexDirection: 'column',
    // alignItems: 'center',
    gap: 6,
    marginTop: 28,
  },
  time: {
    color: '#FE804E',
    fontSize: 12,
    marginRight: 4,
    fontFamily: "Roboto-Regular"
  },
  iconBox: {
    backgroundColor: '#F97316',
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default OrderCard;
