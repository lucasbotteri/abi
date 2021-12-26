import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { useWindowSize } from "@hook";
import { routePath } from "@constant";
import "./NavBar.less";

const { Link: AntdLink } = Typography;

const NavBar = () => {
  const size = useWindowSize();
  const showMenu = (size.width || 0) > 425;
  return (
    <div className="navBar">
      <div className="navBar__logoWrapper">
        <img
          src="/ctrl_c_logo.png"
          className="navBar__logo"
          alt="ctrl c logo"
        />
      </div>
      {showMenu && (
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="print_file">
            <Link to={routePath.PRINT_REQUEST}>Imprimi tu archivo!</Link>
          </Menu.Item>
          <Menu.Item key="follow_instagram">
            <AntdLink
              href="https://www.instagram.com/ctrlc.fotocopias/"
              target="blank"
            >
              Seguinos en instagram
            </AntdLink>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
