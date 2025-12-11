import React from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

const ClerkPublishKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Helpful debug: show whether the publishable key is present
console.log("Clerk publishable key present:", Boolean(ClerkPublishKey));
if (!ClerkPublishKey) {
  console.warn(
    "VITE_CLERK_PUBLISHABLE_KEY is not set. Clerk may fail to initialize. Add it to your .env (Vite requires VITE_ prefix)."
  );
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={ClerkPublishKey}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
