"use client";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

export default function RateContainer({ user, rate, productId }) {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${process.env.base_URL}products/${productId}`);
        setComments(response.data.attributes.comments || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [productId]);

  // Handle comment input change
  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  // Submit comment with API call
  const submitComment = async () => {
    if (userComment.trim() === "" || userRating === 0) {
      alert("Please provide a rating and comment");
      return;
    }

    try {
      const response = await axios.post(`${process.env.base_URL}products/${productId}/comments`, {
        user,
        comment: userComment,
        rating: userRating,
      });

      const newComment = response.data;
      setComments((prevComments) => [...prevComments, newComment]);
      setUserComment(""); // Clear the comment input
      setUserRating(0); // Reset the user rating
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="w-full shadow-sm shadow-gray-400 px-10 text-ltext">
      <h3 className=" text-2xl border-b py-8 font-bold">
        Product Ratings & Reviews
      </h3>
      <p className="pt-10 text-xl font-semibold">Overall Rating</p>
      <p className="mt-1 text-3xl font-semibold ">{rate}</p>
      <ReactStars
        value={rate}
        count={5}
        size={24}
        edit={false}
        activeColor="#2cb67d"
      />
      <p className="text-sm text-slate-400 py-1">
        Based on {comments.length} ratings
      </p>

      {/* User Comment and Rating */}
      <div className="py-10">
        <div className="Rating flex gap-5 items-center">
          <h4 className="text-lg py-5">{user}</h4>
          <ReactStars
            value={userRating}
            count={5}
            size={24}
            activeColor="#2cb67d"
            onChange={handleRatingChange} // Handle change event
          />
        </div>
        <textarea
          className="rounded-md w-full min-h-[40px] text-black p-1 outline-laccent"
          value={userComment}
          onChange={handleCommentChange} // Handle input change
          placeholder="Add your comment..."
        />
        <button
          className="mt-10 w-56 bg-lsecondary  py-3 text-white text-lg hover:bg-laccent"
          onClick={submitComment} // Submit button click event
        >
          Submit Comment
        </button>

        {/* Reviews with Comments */}
        <div className="Reviews  py-2 mt-10 flex flex-col">
          {comments.map((comment, index) => (
            <div key={index} className="py-2 border-b border-b-slate-400">
              <p className="font-bold text-lg">{comment.user}</p>
              <ReactStars
                value={comment.rating}
                count={5}
                size={20}
                edit={false}
                activeColor="#2cb67d"
              />
              <span className=" text-md font-medium">{comment.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
