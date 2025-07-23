import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="cadastro"
        options={{
          title: 'Cadastro',
          tabBarIcon: ({ color }) => <FontAwesome name="plus" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lista"
        options={{
          title: 'Contatos',
          tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FontAwesome name="star" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
