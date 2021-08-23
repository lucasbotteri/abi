import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <Title>CTRL C Fotocopias</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam
        corrupti perspiciatis molestias voluptate{" "}
      </Paragraph>
      <Button type="primary" onClick={() => history.push("/imprimir")}>
        Imprimi tu archivo
      </Button>
    </>
  );
};

export default Landing;
