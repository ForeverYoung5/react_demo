import SideBar from "../SideBar";
import styles from './style.module.scss';

interface IProps {
  mainComponent: any;
};

const Layout: React.FC<IProps> = ({ mainComponent }) => {
  return <div className={styles.layoutContainer}>
    <SideBar />
    <div>
      {mainComponent()}
    </div>
  </div>
};

export default Layout;