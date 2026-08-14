import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About This App</Text>

        <Text style={styles.paragraph}>DCIT324 Mobile Application Development</Text>
        <Text style={styles.paragraph}>Developed by: My Name</Text>
        <Text style={styles.paragraph}>Student ID: 12345678</Text>

        <Text style={styles.paragraph}>
          This mobile application displays a list of news posts fetched from a public API and allows
          the user to view full article details on a separate screen.
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
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#333',
  },
});