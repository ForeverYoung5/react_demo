import SideBar from "../SideBar";

interface IProps {
  mainComponent: any;
};

const layoutContainer = {
  display: 'flex'
}

const Layout: React.FC<IProps> = ({ mainComponent }) => {
  return <div style={layoutContainer}>
    <SideBar />
    <div>
      {mainComponent()}
    </div>
  </div>
};

export default Layout;