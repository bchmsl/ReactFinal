import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validation/contactValidation";
import { useForm, Controller } from "react-hook-form";

const Home = () => {
  const { t } = useTranslation();
  const [visiblePosts, setVisiblePosts] = useState(9);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert(`Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`);
  };

  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        {t("error")}: {error.message}
      </div>
    );

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 9);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <h1>{t("welcome")}</h1>
        <div className="row">
          {posts.slice(0, visiblePosts).map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {t("created_at")}: {new Date().toLocaleDateString()}
                  </small>{" "}
                </div>
                <div className="card-footer">
                  <Link to={`/post/${post.id}`} className="btn btn-primary">
                    {t("view_details")}
                  </Link>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visiblePosts < posts.length && (
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary" onClick={loadMorePosts}>
              {t("show_more")}
            </button>{" "}
          </div>
        )}
      </div>

      <hr></hr>
      <div className="container">
        <h1>{t("about")}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <hr></hr>

      <div className="container">
        <h1>{t("contact")}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">{t("name")}</label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("email")}</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("message")}</label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea className="form-control" id="message" {...field} />
              )}
            />
            {errors.message && (
              <p className="text-danger">{errors.message.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            {t("submit")}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Home;
