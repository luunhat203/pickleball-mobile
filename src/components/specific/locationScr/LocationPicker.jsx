import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subItem: {
    marginLeft: 20,
    marginTop: 5,
  },
});

const data = [
  {
    title: 'Hà Nội',
    subItems: ['Quận Hoàn Kiếm', 'Quận Ba Đình'],
  },
  {
    title: 'TP Hồ Chí Minh',
    subItems: ['Quận 1', 'Quận 2'],
  },
  // ... các địa điểm khác
];

const LocationPicker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState({});

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setExpanded({ ...expanded, [item.title]: !expanded[item.title] })}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <AntDesign name={expanded[item.title] ? 'up' : 'down'} size={24} color="black" />
        </View>
        {expanded[item.title] && (
          <FlatList
            data={item.subItems}
            renderItem={({ item }) => <Text style={styles.subItem}>{item}</Text>}
            keyExtractor={(item) => item}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Chọn điểm đi"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default LocationPicker;
