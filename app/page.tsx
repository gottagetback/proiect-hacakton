import MapView, { Checkpoint } from "./components/MapView";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  const checkpoints: Checkpoint[] = [
    { id: "1", title: "Checkpoint 1", position: { lat: 45.7410646, lng: 21.2165898 } },
    { id: "2", title: "Checkpoint 2", position: { lat: 45.743, lng: 21.22 } },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar />
        <MapView center={{ lat: 45.7410646, lng: 21.2165898 }} zoom={14} checkpoints={checkpoints} />
      </main>
    </div>
  );
}
