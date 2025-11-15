"use client";

import { AlertTriangle, Car, TrendingUp, Users } from "lucide-react";
import styles from "./.StatisticsPanel.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

const statistics = [
  {
    id: 1,
    intersection: "Piața Unirii",
    pedestrians: 1243,
    vehicles: 856,
    trend: "+12%",
    icon: TrendingUp,
    iconColor: styles.chart3,
  },
  {
    id: 2,
    intersection: "Bd. Magheru - Carol I",
    pedestrians: 2108,
    vehicles: 1456,
    trend: "+28%",
    icon: AlertTriangle,
    iconColor: styles.chart4,
  },
  {
    id: 3,
    intersection: "Piața Victoriei",
    pedestrians: 987,
    vehicles: 645,
    trend: "+8%",
    icon: TrendingUp,
    iconColor: styles.chart3,
  },
  {
    id: 4,
    intersection: "Șos. Kiseleff",
    pedestrians: 654,
    vehicles: 1832,
    trend: "+15%",
    icon: TrendingUp,
    iconColor: styles.chart3,
  },
  {
    id: 5,
    intersection: "Piața Romană",
    pedestrians: 1876,
    vehicles: 2145,
    trend: "+42%",
    icon: AlertTriangle,
    iconColor: styles.destructive,
  },
  {
    id: 6,
    intersection: "Bd. Unirii",
    pedestrians: 1432,
    vehicles: 1687,
    trend: "+23%",
    icon: AlertTriangle,
    iconColor: styles.chart4,
  },
  {
    id: 7,
    intersection: "Piața Universității",
    pedestrians: 1765,
    vehicles: 1234,
    trend: "+5%",
    icon: TrendingUp,
    iconColor: styles.chart3,
  },
  {
    id: 8,
    intersection: "Calea Victoriei",
    pedestrians: 998,
    vehicles: 876,
    trend: "+7%",
    icon: TrendingUp,
    iconColor: styles.chart3,
  },
];

export function StatisticsPanel() {
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <CardTitle className={styles.cardTitle}>
          <TrendingUp className={styles.titleIcon} />
          Statistici Trafic
        </CardTitle>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        {statistics.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.intersection}>{stat.intersection}</h3>
              <div className={styles.trend}>
                <stat.icon className={stat.iconColor} />
                <span className={stat.iconColor}>{stat.trend}</span>
              </div>
            </div>

            <div className={styles.statValues}>
              <div className={styles.statItem}>
                <div className={styles.iconWrapperUsers}>
                  <Users />
                </div>
                <div>
                  <p className={styles.label}>Pietoni</p>
                  <p className={styles.value}>{stat.pedestrians.toLocaleString()}</p>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.iconWrapperCars}>
                  <Car />
                </div>
                <div>
                  <p className={styles.label}>Vehicule</p>
                  <p className={styles.value}>{stat.vehicles.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
