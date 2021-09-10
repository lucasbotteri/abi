import { ReactNode } from "react";
import { Layout as AntdLayout, Row, Col } from "antd";
import { NavBar, Footer } from "@component";
import "./Layout.less";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => (
  <AntdLayout className="layout">
    <AntdLayout.Header className="layout__header">
      <NavBar />
    </AntdLayout.Header>
    <AntdLayout.Content className="layout__contentWrapper">
      <Row className="layout__content" align="middle">
        <Col>{children}</Col>
      </Row>
    </AntdLayout.Content>
    <AntdLayout.Footer className="layout__footer">
      <Footer />
    </AntdLayout.Footer>
  </AntdLayout>
);

export default Layout;
