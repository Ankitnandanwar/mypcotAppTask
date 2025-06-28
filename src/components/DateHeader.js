import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalenderIcon from '../icons/Group 911.svg';

const DateHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.dateText}>January, 23 2021</Text>
                <Text style={styles.todayText}>Today</Text>
            </View>

            <View style={styles.actionRow}>
                <TouchableOpacity style={styles.dropdownButton}>
                    <Text style={styles.buttonText}>TIMELINE</Text>
                    <Ionicons name="chevron-down" size={16} color="#4B5563" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.dropdownButton}>
                    <CalenderIcon width={16} height={16} />
                    <Text style={styles.buttonText}>JAN, 2021</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        gap: 15
    },
    dateText: {
        color: '#6B7280',
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        marginBottom: 3,
    },
    todayText: {
        color: '#111827',
        fontSize: 20,
        fontFamily: 'Roboto-SemiBold'
    },
    actionRow: {
        flexDirection: 'row',
        gap: 15,
    },
    dropdownButton: {
        backgroundColor: '#F9FAFB',
        borderRadius: 25,
        height: 32,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    buttonText: {
        color: '#4B5563',
        fontSize: 12,
        fontFamily: 'Roboto-Medium'

    },
});

export default DateHeader;
