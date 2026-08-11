import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to DCIT324 News</Text>
        <Text style={styles.subtitle}>
          Browse the latest articles, read full details, or learn more about this app.
        </Text>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="View News" onPress={() => navigation.navigate('NewsList')} />
          </View>
          <View style={styles.button}>
            <Button title="About" onPress={() => navigation.navigate('About')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    lineHeight: 22,
  },
  buttonGroup: {
    gap: 12,
  },
  button: {
    marginBottom: 12,
  },
});