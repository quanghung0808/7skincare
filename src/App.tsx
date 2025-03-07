import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Suspense } from "react";
import AppRouter from "./routes/router";

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
