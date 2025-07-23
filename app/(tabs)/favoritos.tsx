import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { carregarContatos } from '../../utils/storage';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const todos = await carregarContatos();
        setFavoritos(todos.filter((c) => c.favorito));
      })();
    }, [])
  );

  return (
    <FlatList
      data={favoritos}
      keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.nome} ({item.email})</Text>
          <Text>📞 {item.telefone}</Text>
          <Text>🎂 {item.aniversario}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1 },
});
