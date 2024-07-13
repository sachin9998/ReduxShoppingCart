// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";
import Loader from "./Loader";

const Products = () => {
	const dispatch = useDispatch();
	const { status, data: products } = useSelector((state) => state.product);

	const handleAdd = (prod) => {
		dispatch(add(prod));
	};

	useEffect(() => {
		dispatch(fetchProducts());
		// const fetchProducts = async () => {
		// 	const res = await fetch("https://fakestoreapi.com/products");
		// 	const data = await res.json();
		// 	setProducts(data);
		// };
		// fetchProducts();
	}, [dispatch]);

	if (status === STATUSES.LOADING) {
		return <Loader />;
	}

	if (status === STATUSES.LOADING) {
		return <h2>Something went wrong!!!</h2>;
	}

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
