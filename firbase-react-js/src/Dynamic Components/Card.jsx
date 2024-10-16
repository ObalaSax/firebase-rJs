import LowKey from "../assets/_OVE9149.jpg";
function Card() {
  return (
    <div className="card-container">
      <div className="card-noma">
        <div className="card-components">
          <img src={LowKey} alt="Product-Image" />
          <h1>Product Name</h1>
          <p>Product Price</p>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
