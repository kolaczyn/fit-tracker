import { CurrentStatsContainer } from '../containers/CurrentStatsContainer';
import { NutrientsInputContainer } from '../containers/NutrientsInputContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CurrentStatsContainer />
        <NutrientsInputContainer />
      </main>
    </div>
  );
}
