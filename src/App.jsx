import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./store/Store.js";

function App() {
	return (
		<div>
			<Provider store={store}>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
