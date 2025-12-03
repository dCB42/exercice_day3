import { useEffect, useState } from "react";

export default function ComposantB({ isTriggered }) {
  const [message, setMessage] = useState("En attente...");

  useEffect(() => {
    if (isTriggered) {
      setMessage("B a détecté le clic !");

      const timer = setTimeout(() => {
        setMessage("En attente...");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isTriggered]);

  return <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{message}</p>;
}
