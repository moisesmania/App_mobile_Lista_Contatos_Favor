import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { carregarContatos, salvarContatos } from '../../utils/storage';

export default function Lista() {
  const [contatos, setContatos] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await carregarContatos();
      setContatos(data);
    })();
  }, []);

  const marcarFavorito = async (email: string) => {
    const novos = contatos.map((c) =>
      c.email === email ? { ...c, favorito: !c.favorito } : c
    );
    await salvarContatos(novos);
    setContatos(novos);
  };

  return (
    <FlatList
      data={contatos}
      keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.nome} ({item.email})</Text>
          <Text>📞 {item.telefone}</Text>
          <Text>🎂 {item.aniversario}</Text>
          <Button
            title={item.favorito ? 'Remover dos Favoritos' : 'Favoritar'}
            onPress={() => marcarFavorito(item.email)}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1 },
});
