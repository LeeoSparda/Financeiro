import React from "react";
import {View, Text, Button} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

export default function Sobre({ route }){
    const navigation = useNavigation();

    return(
        <View>

            <Text> Tela de Sobre </Text>
            <Text>{route.params.nome}</Text>
            <Text>{route.params.email}</Text>
            <Button  title = "voltar para Home"
            onPress = {() => navigation.goBack()}
            />
        </View>
    );
}