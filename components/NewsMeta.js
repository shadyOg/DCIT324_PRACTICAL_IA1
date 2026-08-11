import { View, Text, StyleSheet } from 'react-native';

export default function NewsMeta({ author, date, source }) {
  return (
    <View style={styles.metaRow}>
      {author ? <Text style={styles.metaText}>{author}</Text> : null}
      {date ? <Text style={[styles.metaText, styles.metaSeparator]}>{date}</Text> : null}
      {source ? <Text style={[styles.metaText, styles.metaSeparator]}>{source}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  metaText: {
    color: '#666',
    fontSize: 12,
  },
  metaSeparator: {
    marginLeft: 10,
  },
});