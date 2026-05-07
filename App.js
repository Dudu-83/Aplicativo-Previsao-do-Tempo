import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';

import { criarTabela, inserirDadosIniciais, buscarDados } from './Banco';

export default function App() {

  const [dados, setDados] = useState([]);

  
  const imagens = {
    ensolarado: require('./assets/Ensolarado.jpg'),
    chuva: require('./assets/chuva gelada.jpg'),
  };

  useEffect(() => {
  criarTabela();
  inserirDadosIniciais();

  const dadosAtualizados = buscarDados();

  setDados(dadosAtualizados);

}, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={imagens[item.imagem]}
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

      <ImageBackground
        source={require('./assets/céu.jpg')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
      <View style={{ flex: 1, padding: 10}}></View>

      <View style={styles.tituloPrincipal}>
        <Text style={{ color: '#ffffff', marginTop: -260, fontSize: 24, fontWeight: 'bold' }}>
         ☀️ Blue | Sky 🌧️
        </Text>
      </View>

      <FlatList style={{ color: '#ffffff', marginTop: -260, fontSize: 20, fontWeight: 'bold' }}
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
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
    marginTop: 50,
    marginBottom: 50,
  },

  titulo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },

  descricao: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});