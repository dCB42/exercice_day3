import { useState } from "react";
import ComposantA from "./ComposantA";
import ComposantB from "./ComposantB";

export default function Parent() {
  const [clicked, setClicked] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Exemple de communication entre composants</h2>
      <ComposantA onTrigger={() => setClicked((prev) => prev + 1)} />
      <ComposantB isTriggered={clicked} />
    </div>
  );
}
