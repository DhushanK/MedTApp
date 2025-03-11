import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");
const GRID_SIZE = 7;
const CELL_SIZE = width / GRID_SIZE;

const objects = [
  { type: "car", emoji: "🚗", description: "Car" },
  { type: "truck", emoji: "🚚", description: "Truck" },
  { type: "person", emoji: "🧍", description: "Person" },
  { type: "dog", emoji: "🐶", description: "Dog" },
  { type: "cat", emoji: "🐱", description: "Cat" },
];

export default function ObjectPlacementScreen() {
  const [placedObjects, setPlacedObjects] = useState([]);

  useEffect(() => {
    const exampleData = { type: "car", row: 3, col: 4, emoji: "🚗" };
    placeObject(exampleData.row, exampleData.col, exampleData.emoji);
  }, []);

  const placeObject = (row, col, emoji) => {
    const xPos = col * CELL_SIZE + CELL_SIZE / 2 - 15;
    const yPos = row * CELL_SIZE + CELL_SIZE / 2 - 15;
    setPlacedObjects([...placedObjects, { x: xPos, y: yPos, emoji }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Object Placement Grid</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
          <View key={index} style={styles.cell} />
        ))}
        {placedObjects.map((obj, index) => (
          <Text key={index} style={[styles.object, { left: obj.x, top: obj.y }]}>
            {obj.emoji}
          </Text>
        ))}
      </ScrollView>

      {/* Legend at the bottom */}
      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Legend:</Text>
        {objects.map((obj, index) => (
          <View key={index} style={styles.legendItem}>
            <Text style={styles.legendEmoji}>{obj.emoji}</Text>
            <Text style={styles.legendText}>{obj.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EAF6FF", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap", width: width, height: height * 1.7 }, 
  cell: { width: CELL_SIZE, height: CELL_SIZE, borderWidth: 1, borderColor: "#ccc" },
  object: { position: "absolute", fontSize: 30 },

  legendContainer: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  legendTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  legendItem: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  legendEmoji: { fontSize: 22, marginRight: 10 },
  legendText: { fontSize: 16 },
});
