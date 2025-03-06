import { useState } from "react";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: comments.length + 1, user: "Guest", text: newComment }]);
    setNewComment("");
  };

  return (
    <div className="mt-8 p-6 bg-gray-900 rounded-lg">
      <h3 className="text-xl font-bold mb-4">💬 Comments</h3>
      <input
        type="text"
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment} className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">Post Comment</button>
      <div>{comments.map((c) => <p key={c.id} className="text-white">{c.user}: {c.text}</p>)}</div>
    </div>
  );
};

export default CommentSection;
