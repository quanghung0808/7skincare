import { Typography } from "@mui/material";
import Layout from "./components/guest-layout/Layout";
import "./global.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Layout>
        <Typography variant="body1">Welcome to 7skincare!</Typography>
      </Layout>
    </div>
  );
};

export default App;
