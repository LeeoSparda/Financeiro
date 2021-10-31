import React, {useState, useContext}  from "react";
import {View, Text, Button, Platform} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import {AuthContext} from '../../contexts/auth'

import {Backgroud, Container, Logo, AreaInput, Input, SubmitButton, SubmitText ,Link, LinkText} from './styles';





export default function SignIn(){
    const navigation = useNavigation();
        
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext(AuthContext);
 
    function handleLogin(){
        signIn(email, password);

    }


    return(
        <Backgroud>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <Logo source = {require('../../assets/Logo.png')}/>

                <AreaInput>
                    <Input
                    placeholder = "Email"
                    autoCorrect={false}
                    autoCapitaliza="nome"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder = "Senha"
                    autoCorrect={false}
                    autoCapitaliza="nome"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>

        </Backgroud>
    );
}