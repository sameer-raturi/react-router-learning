import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products" exact>
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
      {/* <h2>Let's get started!</h2> */}
    </div>
  );
}

export default App;
