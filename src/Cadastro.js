import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native"

export default function Cadastro({ setLogado, setCadastro }) {

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }
    return (
        <View style={styles.Container}>
            <Text style={styles.titulo2}>Cadastro</Text>
            <Image source={require("../assets/hambgfri.png")} style={styles.imagem} />
            <TextInput style={styles.inputs} placeholder='Email' />
            <TextInput style={styles.inputs} placeholder='Senha' />
            <TouchableOpacity style={styles.btn} onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text style={styles.btnText}>Voltar</Text>
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
