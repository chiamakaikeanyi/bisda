import logo from './logo.svg';
import styles from './app.module.scss';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img alt="logo" className={styles.logo} src={logo} width="50px" />
        <h1 className={styles.app_name}>Bisda</h1>
      </header>
    </div>
  );
}

export default App;
