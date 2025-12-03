import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Votre message a bien été envoyé</h1>
      <p>Nous vous répondrons dans les plus brefs délais.</p>

      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
