export default function ComposantA({ onTrigger }) {
  return (
    <button onClick={onTrigger} style={{ padding: "0.5rem 1rem" }}>
      Clique-moi
    </button>
  );
}
