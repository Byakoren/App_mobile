import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import { useRouter } from 'expo-router';

type AgendaItems = {
  [date: string]: AgendaEntry[];
};

const PlanningScreen: React.FC = () => {
  const router = useRouter();
  const [items, setItems] = useState<AgendaItems>({});
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    const initialItems: AgendaItems = {
      '2025-03-25': [
        { name: 'Maths - BTS SIO', height: 80, day: '2025-03-25' },
      ],
      '2025-03-26': [
        { name: 'Économie - BTS Banque', height: 80, day: '2025-03-26' },
      ],
      '2025-03-27': [
        { name: 'Réseaux - BTS SIO', height: 80, day: '2025-03-27' },
      ],
    };

    setItems(initialItems);


    const firstDateWithEvent = Object.keys(initialItems)[0];
    setSelectedDate(firstDateWithEvent);
  }, []);

  const onCoursePress = (courseName: string) => {
    router.push(`/emargement/${encodeURIComponent(courseName)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planning de vos cours</Text>

      {selectedDate !== '' && (
        <Agenda
          items={items}
          selected={selectedDate}
          renderItem={(item: { name: string }) => (
            <TouchableOpacity style={styles.item} onPress={() => onCoursePress(item.name)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          
          renderEmptyDate={() => (
            <View style={styles.emptyDate}>
              <Text style={styles.emptyText}>Aucun cours ce jour-là</Text>
            </View>
          )}
          theme={{
            agendaDayTextColor: '#F26619',
            agendaDayNumColor: '#F26619',
            agendaTodayColor: '#F22727',
            agendaKnobColor: '#F26619',
          }}
        />
      )}
    </View>
  );
};

export default PlanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2a59',
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#F26619',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyDate: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#555',
  },
});
