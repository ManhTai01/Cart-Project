import "./App.css";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import Message from "./components/Message";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="hidden-sn animated deep-purple-skin">
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <Message />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
