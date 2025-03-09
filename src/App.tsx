import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Suspense } from "react";
import AppRouter from "./routes/router";
import { AlertProvider } from "./context/AlertContext";

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <AlertProvider>
          <AppRouter />
        </AlertProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
