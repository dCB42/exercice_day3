import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    } else if (nom.trim().length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!message.trim()) {
      newErrors.message = "Le message est obligatoire";
    } else if (message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});

    navigate("/confirmation");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page Contact</h1>

      {isSubmitted && (
        <div style={{ color: "green" }}>
          Votre message a été envoyé avec succès !
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
        }}
      >
        <label>
          Nom :
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
          {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
        </label>

        <label>
          Email :
          <input
            // type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>

        <label>
          Message :
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
