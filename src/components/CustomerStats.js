import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import graph from '../icons/graph.png'

const CustomersStats = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={graph}
        style={styles.box}
        imageStyle={{ borderRadius: 12, }} // optional: rounds the image corners
      >
      </ImageBackground>

      <View style={styles.box2}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>
            10
          </Text>
          <Text style={{ fontSize: 12, fontFamily: 'Roboto-ExtraLight' }}>
            Active
          </Text>
        </View>
        <Text style={styles.boldText}>Customers</Text>
      </View>

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
    height: 80,
    top: 5,
    left: 20
  },
  box2: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    width: 130,
    elevation: 3,
    position: 'relative',
    left: -25,
    top: 10
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

  avatarContainer: {
    position: 'absolute',
    bottom: 5,
    right:-20,
    flexDirection: 'row',
    zIndex: 10,

  },
  avatarImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default CustomersStats;
