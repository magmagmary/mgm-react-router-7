import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/Home.tsx"),
	route("about", "routes/About.tsx"),
	route("post/:id", "routes/Post.tsx"),
] satisfies RouteConfig;
