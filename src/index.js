import { createRoot } from "react-dom/client";
import App from "./components/app/app";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
