export default function Participants() {
  const participants = [
    "Participants 1",
    "Participants 2",
    "Participants 3",
    "Participants 4",
    "Participants 5",
    "Participants 6",
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Participants</h1>
      <ul>
        {participants.map((nom, index) => (
          <li key={index}>{nom}</li>
        ))}
      </ul>

      <p>Total : {participants.length}</p>
    </div>
  );
}
