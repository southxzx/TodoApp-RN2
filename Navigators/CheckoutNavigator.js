import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screen
import Checkout from '../Screens/Carts/Checkout/Checkout';
import Payment from '../Screens/Carts/Checkout/Payment';
import Confirm from '../Screens/Carts/Checkout/Confirm';


const Tab = createMaterialTopTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout}/>
            <Tab.Screen name="Payment" component={Payment}/>
            <Tab.Screen name="Confirm" component={Confirm}/>
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <MyTab/>
}