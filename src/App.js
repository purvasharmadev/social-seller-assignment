import "./App.css";
import { featuredProduct, latestProduct, trendingProduct,blogs } from "./data";
import brandBanner from './Assets/brandBanner.png'
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import FeatureCard from "./Components/FeatureCard";
import ProductCard from "./Components/ProductCard";
import CategoryCard from "./Components/CategoryCard";
import BlogCard from "./Components/BlogCard";


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

      {/* Latest Products */}
      <h1 className="text-center color-primary v-gutter">Latest Products</h1>
      <div className="text-center color-primary">
        <span className="text-small p-1 product-link">New Arrival</span>
        <span className="text-small p-1 product-link">Best Seller</span>
        <span className="text-small p-1 product-link">Featured</span>
        <span className="text-small p-1 product-link">Special Offer</span>
      </div>

      <div className="flex container flex-wrap">
        {latestProduct.map((i) => {
          return (
            <ProductCard
              name={i.productName}
              img={i.productImg}
              price={i.productPrice}
              discount={i.discount}
            />
          );
        })}
      </div>
      {/* Trending Products */}
      <h1 className="text-center color-primary v-gutter">Trending Products</h1>
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

      {/* Top Category */}
      <h1 className="text-center color-primary v-gutter">Top Categories</h1>
      <div className="container flex flex-space-between">
        {trendingProduct.map((item) => {
          return (
            <CategoryCard
              name={item.productName}
              img={item.productImg}
              price={item.productPrice}
            />
          );
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* NewsLetter */}
      <div className="w-100 flex v-gutter flex-space-center align-item-center container-newsletter">
        <div className="w-50 text-center mt-1">
          <h2 className="text-md color-primary">Get Leatest Update By Subscribe 0ur Newslater</h2>
          <button className="btn btn-secondary">Shop Now</button>
        </div>
      </div>

      {/* Brand banner */}
      <div className="v-gutter text-center">
        <img src={brandBanner} alt="banner" width="650px"/>
      </div>

      {/* Latest Blog */}
      <h1 className="text-center color-primary v-gutter">Latest Blogs</h1>
      <div className="container flex flex-space-between">
        {blogs.map((item) => {
          return (
            <BlogCard
              title={item.title}
              img={item.img}
              author={item.author}
              date={item.date}
              desc={item.text}
            />
          );
        })}
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;
