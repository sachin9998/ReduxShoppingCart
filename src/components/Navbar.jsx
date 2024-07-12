import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const items = useSelector((state) => state.cart);

	return (
		<div className="navbar">
			<div className="logo">Redux Store by Sachin</div>

			<div>
				<Link className="navLink" to="/">
					Home
				</Link>
				<Link className="navLink" to="/cart">
					Cart
				</Link>
			</div>

			<div>
				<p className="cartCount">Cart items: {items.length}</p>
			</div>
		</div>
	);
};

export default Navbar;
