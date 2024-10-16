import Card from "./Dynamic Components/Card";

function Welcome() {
  return (
    <div>
      <div className="welcome-container">
        <h1>Welcome Page</h1>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Welcome;
