import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocalSearchParams } from "expo-router";

export default function MapScreen() {
  const { latitude, longitude } = useLocalSearchParams();
  const [mapCoords, setMapCoords] = useState({
    latitude: latitude ? parseFloat(latitude) : 37.7749,
    longitude: longitude ? parseFloat(longitude) : -122.4194,
  });

  useEffect(() => {
    if (latitude && longitude) {
      setMapCoords({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
    }
  }, [latitude, longitude]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider="google"
        style={{ flex: 1 }}
        region={{
          latitude: mapCoords.latitude,
          longitude: mapCoords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={mapCoords} title="Received Location" />
      </MapView>
    </View>
  );
}