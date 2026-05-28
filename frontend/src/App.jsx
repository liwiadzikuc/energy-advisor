import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/Login";
// Zostawiamy import głównego pliku CSS, w którym powinien być skonfigurowany Tailwind
import "./index.css";

function App() {
  // Tutaj w przyszłości wkleicie swój prawdziwy Client ID wygenerowany w konsoli Google Cloud
  const GOOGLE_CLIENT_ID = "TWÓJ_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          {/* Ścieżka "/" oznacza stronę główną (czyli nasz logowanie na start) */}
          <Route path="/" element={<Login />} />
          {/* W przyszłości dodasz tu np: <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
