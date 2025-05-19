import React from "react";
import { useNavigate, Outlet } from "react-router";

type Product = {
	id: number;
	name: string;
	price: number;
};

const products: Product[] = [
	{ id: 1, name: "Product 1", price: 100 },
	{ id: 2, name: "Product 2", price: 200 },
	{ id: 3, name: "Product 3", price: 300 },
	{ id: 4, name: "Product 4", price: 400 },
	{ id: 5, name: "Product 5", price: 500 },
	{ id: 6, name: "Product 6", price: 600 },
	{ id: 7, name: "Product 7", price: 700 },
	{ id: 8, name: "Product 8", price: 800 },
	{ id: 9, name: "Product 9", price: 900 },
	{ id: 10, name: "Product 10", price: 1000 },
];

const Products = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-slate-300 h-svh w-svw p-10">
			<button
				className="text-3xl pb-5 border-b border-b-slate-600 cursor-pointer"
				type="button"
				onClick={() => navigate("/products")}
			>
				Products
			</button>

			<div className="grid grid-cols-5">
				{products.map((product) => (
					<button
						type="button"
						key={product.id}
						className="bg-slate-400 p-5 m-5 text-center cursor-pointer"
						onClick={() => navigate(`/products/info/${product.id}`)}
					>
						<h2 className="text-xl font-bold">{product.name}</h2>
						<p className="text-lg">${product.price}</p>
					</button>
				))}
			</div>

			<Outlet />
		</div>
	);
};

export { products };
export default Products;
