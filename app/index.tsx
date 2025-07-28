import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#000000ff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(0);
  let [resultado, setResultado] = useState("");

  const calcImc = () => {
    const imcCalculado = (Number(peso) / (Number(altura) * Number(altura)));
    setImc(imcCalculado);

    let classificacaoAtual = "";
    if (imcCalculado < 18.5) {
      classificacaoAtual = "Abaixo do peso";
    } else if (imcCalculado < 24.9) {
      classificacaoAtual = "Peso normal";
    } else if (imcCalculado < 29.9) {
      classificacaoAtual = "Sobrepeso";
    } else if (imcCalculado < 34.9) {
      classificacaoAtual = "Obesidade grau I";
    } else if (imcCalculado < 39.9) {
      classificacaoAtual = "Obesidade grau II";
    } else {
      classificacaoAtual = "Obesidade grau III";
    }

    setResultado(`Seu IMC é ${imcCalculado.toFixed(2)} e você está classificado como ${classificacaoAtual}.`);
    }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Digite sua Altura em metros"
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        placeholder="Digite seu Peso em kg"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
      />
      <Button
        title="Calcular IMC"
        onPress={calcImc}
      />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}