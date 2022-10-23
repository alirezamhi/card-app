import "./App.css";
import AddProducts from "./components/AddProducts/AddProducts";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ShowProducts from "./components/ShowProducts/ShowProducts";
function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Shopping cart</h1>
        <hr/>
        <div className="row">
          <AddProducts></AddProducts>
          <ShowProducts></ShowProducts>
        </div>
      </Provider>
    </div>
  );
}

export default App;
