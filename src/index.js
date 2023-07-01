import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./app/components/login";
import Dashboard from "./app/components/dashboard";
import Posts from "./app/components/posts";
import postLoader from "./app/loaders/postsLoader";
import Post from "./app/components/post";

const postsList = [
  { id: "1", name: "post top" },
  { id: "2", name: "post opt" },
  { id: "3", name: "post pot" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login name="as" /> },
      {
        path: "/posts",
        element: <Posts postsList={postsList} />,
        children: [{ path: ":postId", element: <Post />, loader: postLoader }],
      },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
