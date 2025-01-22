import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TimerContext from '../context/TimerContext';

const HistoryScreen = () => {
  const { state } = useContext(TimerContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={state.logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>Completed At: {item.completedAt}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  logItem: { padding: 16, marginBottom: 8, backgroundColor: '#f0f0f0', borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  time: { fontSize: 14, color: '#555' },
});

export default HistoryScreen;
