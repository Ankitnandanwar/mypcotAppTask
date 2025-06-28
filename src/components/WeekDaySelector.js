import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const days = [
  { day: 'MON', date: 20 },
  { day: 'TUE', date: 21 },
  { day: 'WED', date: 22 },
  { day: 'THU', date: 23, active: true },
  { day: 'FRI', date: 24 },
  { day: 'SAT', date: 25 },
  { day: 'SUN', date: 26 },
];

const WeekDaySelector = () => {
  return (
    <View style={styles.container}>
      {days.map((item, idx) => (
        <View key={idx} style={styles.dayContainer}>
          <Text
            style={[
              styles.dayText,
              item.active && { color: '#059669', fontFamily:'Roboto-Bold' },
            ]}
          >
            {item.day}
          </Text>
          <Text
            style={[
              styles.dateText,
              item.active && { color: '#059669', fontFamily:'Roboto-Bold' },
            ]}
          >
            {item.date}
          </Text>
          {item.active && <View style={styles.dot} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  dateText: {
    fontSize: 14,
    color: '#111827',
    marginTop: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#059669',
    marginTop: 4,
  },
});

export default WeekDaySelector;
