import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home/Home.tsx"),
	route("about", "routes/about/About.tsx"),
	route("post/:id", "routes/post/Post.tsx"),
] satisfies RouteConfig;
