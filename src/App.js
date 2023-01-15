import Layout from "./Layouts";
import Main from "./pages/Main";

export default function App() {
  return <Layout chlidren={<Main />}></Layout>;
}
