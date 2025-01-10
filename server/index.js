import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-Dsi5I23B.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const AppLayout = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "h-svh w-svw bg-bg-slate-300",
    children: [/* @__PURE__ */ jsxs("nav", {
      className: "bg-white p-5 flex gap-5",
      children: [/* @__PURE__ */ jsx(Link, {
        to: "/",
        children: "Home"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/about",
        children: "About"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/post/5",
        children: "Post"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/products",
        children: "Products"
      })]
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx(Outlet, {})
    })]
  });
};
const AppLayout$1 = withComponentProps(AppLayout);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AppLayout$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const Home = withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-slate-300 flex items-center justify-center h-svh w-svw",
    children: /* @__PURE__ */ jsx("h1", {
      className: "text-3xl font-bold",
      children: "Home page"
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const About = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-slate-300 flex items-center justify-center h-svh w-svw",
    children: /* @__PURE__ */ jsx("h1", {
      className: "text-3xl font-bold",
      children: "About page"
    })
  });
};
const About$1 = withComponentProps(About);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About$1
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async ({
  params
}) => {
  const {
    id
  } = params;
  return {
    id
  };
};
const action = async () => {
};
const Post = ({
  loaderData
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-slate-300 flex items-center justify-center h-svh w-svw",
    children: /* @__PURE__ */ jsxs("h1", {
      className: "text-3xl font-bold",
      children: ["post Id: ", loaderData.id]
    })
  });
};
const Post$1 = withComponentProps(Post);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Post$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const products = [{
  id: 1,
  name: "Product 1",
  price: 100
}, {
  id: 2,
  name: "Product 2",
  price: 200
}, {
  id: 3,
  name: "Product 3",
  price: 300
}, {
  id: 4,
  name: "Product 4",
  price: 400
}, {
  id: 5,
  name: "Product 5",
  price: 500
}, {
  id: 6,
  name: "Product 6",
  price: 600
}, {
  id: 7,
  name: "Product 7",
  price: 700
}, {
  id: 8,
  name: "Product 8",
  price: 800
}, {
  id: 9,
  name: "Product 9",
  price: 900
}, {
  id: 10,
  name: "Product 10",
  price: 1e3
}];
const Products = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-slate-300 h-svh w-svw p-10",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl pb-5 border-b border-b-slate-600 cursor-pointer",
      onClick: () => navigate("/products"),
      children: "Products"
    }), /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-5",
      children: products.map((product) => /* @__PURE__ */ jsxs("div", {
        className: "bg-slate-400 p-5 m-5 text-center cursor-pointer",
        onClick: () => navigate(`/products/info/${product.id}`),
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-xl font-bold",
          children: product.name
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-lg",
          children: ["$", product.price]
        })]
      }, product.id))
    }), /* @__PURE__ */ jsx(Outlet, {})]
  });
};
const Products$1 = withComponentProps(Products);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Products$1,
  products
}, Symbol.toStringTag, { value: "Module" }));
const loader = async ({
  params
}) => {
  const {
    id
  } = params;
  return {
    id
  };
};
const ProductInfo = ({
  loaderData
}) => {
  const product = products.find((product2) => product2.id === +loaderData.id);
  if (!product) {
    return /* @__PURE__ */ jsx("div", {
      className: "bg-red-500 text-white p-5",
      children: "Product not found"
    });
  }
  return /* @__PURE__ */ jsx("div", {
    className: "pt-5 border-t border-slate-600",
    children: /* @__PURE__ */ jsxs("div", {
      className: "bg-slate-400 p-5 m-5 text-center cursor-pointer",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-xl font-bold",
        children: product.name
      }), /* @__PURE__ */ jsxs("p", {
        className: "text-lg",
        children: ["$", product.price]
      })]
    }, product.id)
  });
};
const ProductInfo$1 = withComponentProps(ProductInfo);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProductInfo$1,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BkN_BLv9.js", "imports": ["/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BDO8SmCq.js", "imports": ["/assets/chunk-K6AXKMTT-Br6w6dk1.js", "/assets/with-props-BrnPQaVP.js"], "css": [] }, "layout/AppLayout": { "id": "layout/AppLayout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/AppLayout-CEzSsKUa.js", "imports": ["/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes/home/Home": { "id": "routes/home/Home", "parentId": "layout/AppLayout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Home-BfgBPrJP.js", "imports": ["/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes/about/About": { "id": "routes/about/About", "parentId": "layout/AppLayout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/About-BQzlYRTa.js", "imports": ["/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes/post/Post": { "id": "routes/post/Post", "parentId": "layout/AppLayout", "path": "post/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Post-B_IP8fAD.js", "imports": ["/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes/products/Products": { "id": "routes/products/Products", "parentId": "layout/AppLayout", "path": "products", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Products-C-sBYnW8.js", "imports": ["/assets/Products-BFHyhp2u.js", "/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js"], "css": [] }, "routes/products/ProductInfo": { "id": "routes/products/ProductInfo", "parentId": "routes/products/Products", "path": "info/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ProductInfo-Cma2yqRm.js", "imports": ["/assets/with-props-BrnPQaVP.js", "/assets/chunk-K6AXKMTT-Br6w6dk1.js", "/assets/Products-BFHyhp2u.js"], "css": [] } }, "url": "/assets/manifest-ad483a9d.js", "version": "ad483a9d" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "layout/AppLayout": {
    id: "layout/AppLayout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home/Home": {
    id: "routes/home/Home",
    parentId: "layout/AppLayout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about/About": {
    id: "routes/about/About",
    parentId: "layout/AppLayout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/post/Post": {
    id: "routes/post/Post",
    parentId: "layout/AppLayout",
    path: "post/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/products/Products": {
    id: "routes/products/Products",
    parentId: "layout/AppLayout",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/products/ProductInfo": {
    id: "routes/products/ProductInfo",
    parentId: "routes/products/Products",
    path: "info/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
