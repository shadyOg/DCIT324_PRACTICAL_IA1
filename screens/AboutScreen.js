import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About This App</Text>
        <Text style={styles.paragraph}>
          This app shows news items and details. It was built for the DCIT324 Practical IA.
        </Text>
        <Text style={styles.paragraph}>
          You can add more information here about the app, the developer, how it works, or the data source.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#333',
  },
});