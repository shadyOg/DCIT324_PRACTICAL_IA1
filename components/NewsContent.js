import { Text, StyleSheet } from 'react-native';

export default function NewsContent({ content }) {
  return <Text style={styles.content}>{content}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});