import { Typography } from "antd";
import { firebaseAuth } from "app/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { routePath } from "@constant";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: routePath.ADMIN.ROOT,
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const { Title } = Typography;

const Login = () => {
  return (
    <>
      <Title>Por favor logueate para ingresar</Title>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </>
  );
};

export default Login;
