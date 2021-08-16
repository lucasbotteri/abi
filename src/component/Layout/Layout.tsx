import { ReactNode } from "react";
import { Layout as AntdLayout, Row, Col } from "antd";
import { NavBar } from "@component";
import "./Layout.less";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => (
  <AntdLayout className="layout">
    <AntdLayout.Header className="layout__header">
      <NavBar />
    </AntdLayout.Header>
    <AntdLayout.Content className="layout__content">
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 22, offset: 1 }}
          lg={{ span: 20, offset: 2 }}
          xxl={{ span: 16, offset: 4 }}
        >
          {children}
        </Col>
      </Row>
    </AntdLayout.Content>
    <AntdLayout.Footer>Footer</AntdLayout.Footer>
  </AntdLayout>
);

export default Layout;
