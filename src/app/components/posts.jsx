import { Link, Outlet } from "react-router-dom";

const Posts = ({ postsList }) => {
  return (
    <>
      {postsList.map((post) => {
        return (
          <Link role="button" key={post.id} to={post.id}>
            <h1>{post.id}</h1>
          </Link>
        );
      })}
      <Outlet />
    </>
  );
};

export default Posts;
