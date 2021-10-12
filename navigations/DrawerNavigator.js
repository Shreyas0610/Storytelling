import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from '../screens/Profile';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.screen name = "Home" component={BottomTabNavigator}/>
            <Drawer.screen name = "Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;