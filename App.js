import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    if (texto.trim() !== '') {
      setItens([...itens, texto]);
      setTexto('');
    }
  }

  return (
    <View style={styles.fundoTela}>
      {/* Container principal que simula o ecrã do telemóvel */}
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Compras</Text>
        
        {/* Usando Flexbox para deixar input e botão lado a lado */}
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite um novo item..."
            value={texto}
            onChangeText={setTexto}
          />
          <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({ item }) => (
            <View style={styles.cartaoItem}>
              <Text style={styles.textoItem}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundoTela: {
    flex: 1,
    backgroundColor: '#e9ecef', // Fundo cinzento claro na web
    alignItems: 'center', // Centraliza a aplicação
  },
  container: { 
    flex: 1, 
    width: '100%',
    maxWidth: 450, // Limita a largura para não esticar no browser
    backgroundColor: '#ffffff', // Fundo branco da app
    padding: 24, 
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 16,
    // Sombras para dar destaque
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 24, 
    textAlign: 'center',
    color: '#212529'
  },
  areaInput: {
    flexDirection: 'row', // Coloca os elementos lado a lado (Aula 4)
    marginBottom: 24,
  },
  input: { 
    flex: 1, // Ocupa o espaço que sobra
    borderWidth: 1, 
    borderColor: '#ced4da', 
    borderRadius: 8, 
    padding: 12, 
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#0d6efd', // Azul mais moderno
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartaoItem: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e3e5',
  },
  textoItem: { 
    fontSize: 16, 
    color: '#495057' 
  },
});