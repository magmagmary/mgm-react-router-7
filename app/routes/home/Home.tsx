export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="bg-slate-300 flex items-center justify-center h-svh w-svw">
			<h1 className="text-3xl font-bold">Home page</h1>
		</div>
	);
}
