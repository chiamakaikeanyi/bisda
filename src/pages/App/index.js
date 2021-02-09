import logo from './logo.svg';
import styles from './app.module.scss';
import { ReactComponent as BusinessDeal } from '../../images/business_deal.svg';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img alt="logo" className={styles.logo} src={logo} width="50px" />
        <h1 className={styles.app_name}>Bisda</h1>
      </header>
      <BusinessDeal />
    </div>
  );
}

export default App;
