import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarText from '../components/TabBarText'
import TabBarIcons from '../components/TabBarIcons'
import Home from '../screens/Home'
import Customers from '../screens/Customers'
import Khata from '../screens/Khata'
import Orders from '../screens/Orders'
import FloatingTabButton from '../components/FloatingTabButton'; // import your new button
import CustomTabBarBackground from '../components/CustomTabBarBg';

const StackNavigator = createNativeStackNavigator()
const Tabs = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 60,
                },
                tabBarBackground: () => <CustomTabBarBackground />,
            }}
        >
            <Tabs.Screen name="Home" component={Home} options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarText title="Home" focused={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcons icon='home' focused={focused} />
                )
            }} />
            <Tabs.Screen name="Customers" component={Customers} options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarText title="Customers" focused={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcons icon='customers' focused={focused} />
                )
            }} />

            <Tabs.Screen
                name="Add"
                options={{
                    tabBarButton: (props) => (
                        <FloatingTabButton
                            {...props}
                            onPress={() => {
                                // Handle your plus button press here
                            }}
                        />
                    ),
                }}
            >
                {() => null}
            </Tabs.Screen>

            <Tabs.Screen name="Khata" component={Khata} options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarText title="Khata" focused={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcons icon='khata' focused={focused} />
                )
            }} />

            <Tabs.Screen name="Orders" component={Orders} options={{
                tabBarLabel: ({ focused }) => (
                    <TabBarText title="Orders" focused={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                    <TabBarIcons icon='orders' focused={focused} />
                )
            }} />

        </Tabs.Navigator>
    )
}


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator screenOptions={{ headerShown: false, animation:"slide_from_right" }}>
                <StackNavigator.Screen name="TabNavigator" component={TabNavigator} />
                {/* <StackNavigator.Screen name="AllFoodList" component={AllFoodList} />
                <StackNavigator.Screen name="FoodDetails" component={FoodDetails} /> */}
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator