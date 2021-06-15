import { CurrentStatsContainer } from '../containers/CurrentStatsContainer';
import { NutrientsInputContainer } from '../containers/NutrientsInputContainer';

export default function Home() {
  return (
    <div>
      <main>
        <CurrentStatsContainer />
        <NutrientsInputContainer />
      </main>
    </div>
  );
}
