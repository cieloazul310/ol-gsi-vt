import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { UIProvider } from "@yamada-ui/react";
import Loader from "./loader";
import "./index.css";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </UIProvider>
  </StrictMode>,
);
