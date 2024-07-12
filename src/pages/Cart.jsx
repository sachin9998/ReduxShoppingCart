import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemove = (productID) => {
		dispatch(remove(productID));
	};

	return (
		<div>
			<h3>Cart</h3>

			<div className="cartWrapper">
				{cartItems.map((item) => {
					return (
						<div className="cartCard" key={item.id}>
							<img src={item.image} alt="" />
							<h5>{item.title}</h5>
							<h5>$ {item.price}</h5>

							<button
								onClick={() => handleRemove(item.id)}
								type="button"
								className="btn"
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
