import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_CONTATOS = 'CONTATOS';

export async function salvarContatos(contatos: any[]) {
  try {
    const json = JSON.stringify(contatos);
    await AsyncStorage.setItem(CHAVE_CONTATOS, json);
  } catch (e) {
    console.error('Erro ao salvar contatos:', e);
  }
}

export async function carregarContatos(): Promise<any[]> {
  try {
    const json = await AsyncStorage.getItem(CHAVE_CONTATOS);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erro ao carregar contatos:', e);
    return [];
  }
}
