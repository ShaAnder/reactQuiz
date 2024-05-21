export function Debug({ reducerState, start }) {
  return (
    <div>
      <div>{`Amount: ${reducerState.amount}`}</div>
      <div>{`Category: ${reducerState.category}`}</div>
      <div>{`Difficulty: ${reducerState.difficulty}`}</div>
      <div>{`Type: ${reducerState.type}`}</div>
      <div>{`Start: ${start}`}</div>
    </div>
  );
}
