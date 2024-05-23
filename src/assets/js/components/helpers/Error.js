/**
 * Error Component for our user feedback
 * @param {*} params -> (children) takes a children arg from app, we pass the error message in here for aprsing
 * @returns JSX for error component
 * @author ShaAnder
 */
function Error({ children }) {
  return (
    <p className="error">
      <span>💥</span> {children}
    </p>
  );
}

export default Error;
