import React, {useState, useContext}  from "react";
import {View, Text, Button, Platform} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import {Backgroud, Container, Logo, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styles';
import { AuthContext } from "../../contexts/auth";


//import { test } from "jest-circus";
//import { Link } from "@react-navigation/native";


export default function SignIn(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {signUp} = useContext(AuthContext);
       
    function handleSignUp(){
        signUp(email,password,nome);
    } 


    return(
        <Backgroud>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
               <AreaInput>
                    <Input
                    placeholder = "Nome"
                    autoCorrect={false}
                    autoCapitaliza="nome"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                
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

                <SubmitButton onPress = {handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>



            </Container>

        </Backgroud>
    );
}