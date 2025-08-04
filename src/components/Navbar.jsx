import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import Logo from './Logo';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons';

const Navbar = ({ sidebarVisible, setSidebarVisible }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const { Sider } = Layout;

  return (
    <div
      className={`absolute top-0 left-0 h-full w-[200px] z-10 transition-transform duration-300 ${
        sidebarVisible ? 'translate-x-0' : '-translate-x-full'
      } p-4`}
      style={{
        backgroundColor: '#142434', 
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <Logo />
        <Button
          type="text"
          className="text-white text-xl"
          onClick={() => setSidebarVisible(false)}
          icon={<CloseOutlined />}
        />
      </div>

      <MenuList darkTheme={darkTheme} />
      <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Navbar;
