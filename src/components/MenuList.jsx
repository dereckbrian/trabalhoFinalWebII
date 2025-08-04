import { Menu } from "antd";
import { AppstoreAddOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, PayCircleOutlined, SettingFilled,LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"
const MenuList = ({ darkTheme }) => {
    const navigate = useNavigate();
    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className="menu-bar"
            style={{ backgroundColor: '#142434', }}
            onClick={({ key }) => navigate(key)}>

            <Menu.Item key="/userPage" icon={<HomeOutlined />}
            >
                Home
            </Menu.Item>

            <Menu.Item key="/userPage/activity" icon={<AppstoreAddOutlined />}
            >
                Activity
            </Menu.Item>
            <Menu.SubMenu
                key="subtasks"
                icon={<BarsOutlined />}
                title="Tasks"
            >
                <Menu.Item key="task-1">Task 1</Menu.Item>
                <Menu.Item key="task-2">Task 2</Menu.Item>
                <Menu.SubMenu key="tasks" title="Susbtasks">
                    <Menu.Item key="subtask-1">Subtask 1</Menu.Item>
                    <Menu.Item key="subtask-2">Subtask 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="progress" icon={<AreaChartOutlined />}
            >
                Progress
            </Menu.Item>

            <Menu.Item key="payment" icon={<PayCircleOutlined />}
            >
                Payment
            </Menu.Item>

            <Menu.Item key="setting" icon={<SettingFilled />}
            >
                Setting
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}
            >
                Logout
            </Menu.Item>
        </Menu>
    )
}

export default MenuList