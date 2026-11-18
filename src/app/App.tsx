import styles from '@/app/App.module.css';
import Greeting from '@/domain/settings/components/Greeting';

export default function App() {
  return (
    <main className={styles.hello}>
      <Greeting />
    </main>
  );
}
