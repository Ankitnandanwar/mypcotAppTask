import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OrdersStats = ({ item }) => {
  return (
    <View style={[styles.rightInfoBox, { backgroundColor: "#fff" }]}>
      <Text style={styles.infoText}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>
            {item.stats.value}
          </Text>
          <Text style={{ fontSize: 10, fontFamily: 'Roboto-ExtraLight' }}>
            Pending
          </Text>
        </View>
        <Text style={styles.boldText}>{item.stats.label}</Text>
      </Text>
      <View style={styles.avatarContainer}>
        {item.stats.avatars?.map((avatar, index) => (
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
  );
};

const styles = {
  rightInfoBox: {
    position: 'absolute',
    top: 110,
    right: 28,
    height: 80,
    backgroundColor: '#E6613E',
    borderRadius: 12,
    padding: 12,
    paddingRight: 16,
    width: 130,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 5,

  },
  infoText: {
    color: '#000',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },

  boldText: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
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

export default OrdersStats;
