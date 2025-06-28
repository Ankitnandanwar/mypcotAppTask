import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SubscriptionsStats = ({ stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap:6 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>
            10
          </Text>
          <Text style={{ fontSize: 12, fontFamily: 'Roboto-ExtraLight' }}>
            Active
          </Text>
        </View>
        <Text style={styles.boldText}>Subscriptions</Text>
      </View>

      <View style={styles.box2}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>
            119
          </Text>
          <Text style={{ fontSize: 12, fontFamily: 'Roboto-ExtraLight' }}>
            Pending
          </Text>
        </View>
        <Text style={styles.boldText}>Deliveries</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 26,
    right: 32,
    gap: 10,
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    width: 120,
    elevation: 3,
  },
  box2: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    width: 120,
    elevation: 3,
    position:'relative',
    left:20,
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  labelText: {
    fontSize: 12,
    color: '#666',
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
  boldText: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
});

export default SubscriptionsStats;
