import { useLoaderData } from "react-router-dom";

const Post = () => {
  const post = useLoaderData();
  return <h1>Post {post ? "№:" + post : "undefined"}</h1>;
};

export default Post;
