import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Keyboard, StyleSheet, Image } from 'react-native'



export default function login({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login() {
        Keyboard.dismiss();
        if (email == "blabla@.com.br" && senha == "1234") {
            setLogado(true);
        }
    }

    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.titulo2}>LOGIN</Text>
            <Image source={require("../assets/icon.png")} style={styles.imagem} />
            <TextInput style={styles.inputs} onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                placeholder='Email' />
            <TextInput style={styles.inputs} onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                placeholder='Senha' />
            <TouchableOpacity style={styles.btn} onPress={Login}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 50
    },
    inputs: {
        width: 300,
        height: 50,
        backgroundColor: '#DB9C39',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 15,
        textAlign: "center",
    },
    btn: {
        width: 300,
        height: 55,
        backgroundColor: '#DB6B39',
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 1,
        marginLeft: 15,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
    },
    imagem: {
        width: "60%",
        resizeMode: 'stretch',
        height: 200,
        marginLeft: "5%",
        borderRadius: 20
    },
    titulo2: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
    },
});
