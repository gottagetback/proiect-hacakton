/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TraficLightColorState } from "@/app/models/enums";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import useTrafficLights from "../hooks/useTrafficLights";
import { TrafficLight } from "../models/types";
import styles from "./.IntersectionsList.module.css";
import { Badge } from "./Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import Loading from "./Loading";

export function IntersectionsList() {
  const [trafficLights, setTrafficLights] = useState<TrafficLight[]>([]);
  const [loading, setLoading] = useState(true);

  const { getAllTrafficLights, subscribeToTrafficLights } = useTrafficLights();

  useEffect(() => {
    let unsub: any;

    const init = async () => {
      await getAllTrafficLights();
      console.log("merge");

      unsub = await subscribeToTrafficLights();
    };

    init();

    return () => {
      if (unsub) unsub();
    };
  }, []);

  useEffect(() => {
    const dataGetter = async () => {
      setLoading(true);
      try {
        const response = await getAllTrafficLights();
        setTrafficLights((response.data as TrafficLight[]) || []);
        console.log("Traffic lights loaded:", response.data);
      } catch (err) {
        console.error("Error fetching traffic lights:", err);
      } finally {
        setLoading(false);
      }
    };

    dataGetter();
  }, [getAllTrafficLights]);

  if (loading) return <Loading />;
  if (trafficLights.length === 0) return <div>No traffic lights found.</div>;

  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <CardTitle className={styles.cardTitle}>
          <MapPin className={styles.icon} />
          Semafoarele Monitorizate
        </CardTitle>
      </CardHeader>

      <CardContent className={styles.cardContent}>
        {trafficLights.map((trafficLight) => (
          <div key={trafficLight.id} className={styles.intersectionCard}>
            <div className={styles.left}>
              <div
                className={`${styles.trafficLight} ${
                  trafficLight.trafficLightStatus === TraficLightColorState.GREEN
                    ? styles.green
                    : trafficLight.trafficLightStatus === TraficLightColorState.YELLOW
                    ? styles.yellow
                    : trafficLight.trafficLightStatus === TraficLightColorState.RED
                    ? styles.red
                    : styles.gray
                }`}
              />
              <span className={styles.name}>{trafficLight.id}</span>
            </div>

            <Badge variant="default">{trafficLight.trafficLightStatus}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
