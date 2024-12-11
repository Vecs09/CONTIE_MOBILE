import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.headerContainer}>
        <Image
          source={require('./assets/contie2024F1.png')} // Ruta relativa
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Comprar Artículo</Text>
        <Text style={styles.headerSubtitle}>¿Eres el primer autor?</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar artículo por ID"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      {/* Article Info (Vertical Format) */}
      <View style={styles.articleContainer}>
        <Text style={styles.articleLabel}>ID:</Text>
        <Text style={styles.articleValue}>13</Text>

        <Text style={styles.articleLabel}>Primer Autor:</Text>
        <Text style={styles.articleValue}>Jose Edgar Garcia Diaz</Text>

        <Text style={styles.articleLabel}>Nombre:</Text>
        <Text style={styles.articleValue}>
          Aplicativo móvil para el aprendizaje de Lengua de Señas Peruanas en instituciones educativas de nivel secundario
        </Text>

        <Text style={styles.articleLabel}>Costo:</Text>
        <Text style={styles.articleValue}>$230.00</Text>

        <Text style={styles.totalText}>Total registro de artículo por autor: $230.00</Text>
      </View>

      {/* Authors List */}
      <View style={styles.authorsContainer}>
        <View style={styles.authorRow}>
          <View>
            <Text style={styles.authorName}>Jose Edgar Garcia Diaz</Text>
            <Text style={styles.authorEmail}>jopegar@gmail.com</Text>
          </View>
        </View>

        <View style={styles.authorRow}>
          <View>
            <Text style={styles.authorName}>Neyer Gutierrez Torres</Text>
            <Text style={styles.authorEmail}>neyergutierreztorres@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 8,
  },
  searchBar: {
    flex: 1,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#2c2c2c',
    borderRadius: 8,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPrimarySmall: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#ffffff',
    marginVertical: 8,
    fontSize: 14,
  },
  articleContainer: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  articleLabel: {
    color: '#888888',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  articleValue: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
  },
  totalText: {
    color: '#1E88E5',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  authorsContainer: {
    marginBottom: 20,
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  authorName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorEmail: {
    color: '#888888',
    fontSize: 14,
  },
});
