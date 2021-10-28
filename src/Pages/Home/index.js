import React from "react";
import {View, Text, Button} from 'react-native';
import { useNavigation } from "@react-navigation/core";

export default function Home(){
    const navigation = useNavigation();


    function irSobbre(){
        navigation.navigate('Sobre', {nome: 'Leonardo', email: 'leonardo@gmail.com'});
    }

    return(
        <View>
            <Text> Tela de home </Text>
            <Text> ola ola ola  </Text>
            <Button 
            title= "Ir para Sobre"
            onPress={irSobbre}
            />
        </View>
    );
}