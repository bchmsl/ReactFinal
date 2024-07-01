import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1>Post Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Created at: {new Date().toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
