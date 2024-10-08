import SignInOut from "../SignInOut";

function Welcome() {
  const backPage = () => {
    <SignInOut />;
  };
  return (
    <div>
      <h1>Wecome User</h1>
      <button onClick={backPage}>Back</button>
    </div>
  );
}

export default Welcome;
