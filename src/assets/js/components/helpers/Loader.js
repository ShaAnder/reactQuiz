/**
 * Simple Loader Component for our react app
 * @param {*} params -> (takes our children prop for loading the text we want allowing for reusability
 * @returns jsx for loading prop
 * @author ShaAnder
 */
export default function Loader({ children }) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{children}</p>
    </div>
  );
}

// OPTIONAL CSS FOR LOADER

/*

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1.6rem;

  color: var(--color-medium);
  font-size: 1.4rem;
}

.loader {
  width: 50px;
  height: 24px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0%
      50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100% / 3) 12px;
  background-repeat: no-repeat;
  animation: loader 1s infinite linear;
}

*/
