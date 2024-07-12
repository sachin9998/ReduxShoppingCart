// import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	const handleAdd = (prod) => {
		dispatch(add(prod));
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const res = 0;
			const data = await res.json();

			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<div className="productsWrapper">
			{products.map((prod) => {
				return (
					<div className="card" key={prod.id}>
						<img src={prod.image} alt={prod.title} />

						<h4>{prod.title}</h4>
						<h5>$ {prod.price}</h5>

						<button
							onClick={() => {
								handleAdd(prod);
							}}
							type="button"
							className="btn"
						>
							Add to Cart
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
