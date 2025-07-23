import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { salvarContatos, carregarContatos } from '../../utils/storage';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [aniversario, setAniversario] = useState('');

  const handleSalvar = async () => {
    if (!nome || !telefone || !email || !aniversario) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const contatos = await carregarContatos();

    if (contatos.find((c: any) => c.email === email)) {
      Alert.alert('Erro', 'Email já cadastrado');
      return;
    }

    const novoContato = { nome, telefone, email, aniversario, favorito: false };
    await salvarContatos([...contatos, novoContato]);

    setNome('');
    setTelefone('');
    setEmail('');
    setAniversario('');
    Alert.alert('Sucesso', 'Contato salvo!');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Aniversário (dd/mm/aaaa)" style={styles.input} value={aniversario} onChangeText={setAniversario} />
      <Button title="Salvar Contato" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 6 },
});
