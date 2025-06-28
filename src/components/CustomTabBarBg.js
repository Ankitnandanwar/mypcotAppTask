import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const height = 60;
const radius = 36; // Should match your FloatingTabButton radius

const CustomTabBarBg = () => {
  const center = width / 2;
  const cutoutRadius = radius + 8; // adjust for spacing

  // Path for a bar with a downward semicircle cutout in the center
  const d = `
    M0,0
    H${center - cutoutRadius}
    A${cutoutRadius},${cutoutRadius} 0 0 1 ${center + cutoutRadius},0
    H${width}
    V${height}
    H0
    Z
  `;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} style={{ position: 'absolute', bottom: 0 }}>
        <Path d={d} fill="#fff" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height,
    zIndex: 0,
    backgroundColor: 'transparent', // Ensure transparency
  },
});

export default CustomTabBarBg;