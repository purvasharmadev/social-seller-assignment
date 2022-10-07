import "./App.css";
import { featuredProduct } from "./data";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import FeatureCard from "./Components/FeatureCard";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Landing page */}
      <Landing />

      {/* Featured Products */}
      <h1 className="text-center color-primary v-gutter">Featured Products</h1>
      <div className="container flex flex-space-between">
        {featuredProduct.map((item) => {
          return (
            <FeatureCard
              name={item.productName}
              img={item.productImg}
              code={item.productCode}
              price={item.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
