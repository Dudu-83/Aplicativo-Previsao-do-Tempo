import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {

  const dados = [
    {
      id: '1',
      titulo: 'Cariacica',
      descricao: 'Clima: Ensolarado',
      imagem: require('./assets/icon2.0.png'),
    },
    {
      id: '2',
      titulo: 'Vila Velha',
      descricao: 'Clima: Chuvoso',
      imagem: require('./assets/icon2.0.png'),
    },
    {
      id: '3',
      titulo: 'Vitória',
      descricao: 'Clima: Chuvoso',
      imagem: require('./assets/icon2.0.png'),
    },
    {
      id: '4',
      titulo: 'Viana',
      descricao: 'Clima: Ensolarado',
      imagem: require('./assets/icon2.0.png'),
    }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={item.imagem}
        style={styles.imagem}
      />

      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.tituloPrincipal}>

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          App Previsão do Tempo
        </Text>
      </View>


      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#ccc',
  },

  textoContainer: {
    flex: 1,
  },

  tituloPrincipal: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },

  descricao: {
    color: '#555',
  },
});