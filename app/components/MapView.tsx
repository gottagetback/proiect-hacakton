"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useCallback } from "react";

export type Checkpoint = {
  id: string;
  title: string;
  position: { lat: number; lng: number };
};

type Props = {
  center: { lat: number; lng: number };
  zoom?: number;
  checkpoints?: Checkpoint[];
};

const containerStyle = { width: "100%", height: "500px" };

export default function MapView({ center, zoom = 14, checkpoints = [] }: Props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const handleMapLoad = useCallback((map: google.maps.Map) => {
    console.log("Map loaded:", map);
  }, []);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onLoad={handleMapLoad}>
      {checkpoints.map((cp) => (
        <Marker key={cp.id} position={cp.position} title={cp.title} />
      ))}
    </GoogleMap>
  );
}
