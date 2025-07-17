import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{body}</p>
    </div>
  );
};

export default PostCard;
