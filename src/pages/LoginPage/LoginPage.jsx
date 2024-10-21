import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = ({ setToken }) => {
  return (
    <>
      <Header />
      <LoginForm setToken={setToken} />
    </>
  );
};

export default LoginPage;
