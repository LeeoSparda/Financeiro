import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../Pages/Home';
import New from '../Pages/New';
import Profile from "../Pages/Profile";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#171717'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            },
            activeTintColor: '#FFF',
            activeBackgroundColor: '#00b94a',
            inactiveTintColor: '#000',
            inactiveTintColor: '#DDD',
            itemStyle:{
                marginVertical: 5,
            } 
        }}
        >
            <AppDrawer.Screen name ="Home" component={Home}/>
            <AppDrawer.Screen name ="Registrar" component={New}/>
            <AppDrawer.Screen name ="Perfil" component={Profile}/>


        </AppDrawer.Navigator>
    )
}

export default AppRoutes;