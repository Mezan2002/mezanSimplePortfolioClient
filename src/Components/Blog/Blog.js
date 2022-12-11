import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center text-white card glass min-h-screen rounded-none">
        <h2 className="text-5xl font-bold mt-5">Coming Soon...</h2>
        <div className="absolute top-5 left-5">
          <a title="back to home" className="btn rounded-full" href="/">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
