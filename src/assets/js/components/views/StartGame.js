export function StartGame({ info, setStatus }) {
  return (
    <div className="start">
      <h2>Welcome to Quick Quiz</h2>
      <h3>Test your knowledge with these {info.amount} questions!</h3>
      <button className="btn confirm-btn" onClick={() => setStatus("active")}>
        Let's Begin
      </button>
    </div>
  );
}
