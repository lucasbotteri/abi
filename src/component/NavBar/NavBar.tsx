import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./NavBar.less";

const NavBar = () => (
  <div className="navBar">
    <div className="navBar__logoWrapper">
      <img src="/ctrl_c_logo.png" className="navBar__logo" alt="ctrl c logo" />
    </div>
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item>
        <Link to="/imprimir">Imprimi tu archivo!</Link>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.instagram.com/ctrlc.fotocopias/" target="blank">
          Seguinos en instagram
        </a>
      </Menu.Item>
    </Menu>
  </div>
);

export default NavBar;
