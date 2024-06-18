import React, { useEffect, useState } from "react";
import "./adminTable.scss";
import AdminSidebar from "./AdminSidebar.jsx";
import {
  fetchAllReviews,
  updateReview,
} from "./../../../Helpers/fetchProducts.js";
import Swal from "sweetalert2";

const ReviewTable = () => {
  const [reviews, setReviews] = useState([]);
  const [searchReview, setSearchReview] = useState("");
  const [adminComments, setAdminComments] = useState({}); // Added state to manage admin comments

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await fetchAllReviews();
        setReviews(reviewsData);
        console.log("ReviewsTable:", reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchData();
  }, []);

  const searchReviewHandler = (event) => {
    setSearchReview(event.target.value);
  };

  const filteredReviews = reviews.filter((review) => {
    const userName = review.user
      ? `${review.user.firstName} ${review.user.lastName}`
      : "";
    return userName.toLowerCase().includes(searchReview.toLowerCase());
  });

  const handleCommentChange = (event, reviewId) => {
    setAdminComments({
      ...adminComments,
      [reviewId]: event.target.value,
    });
  };

  const submitComment = async (reviewId) => {
    const adminComment = adminComments[reviewId];
    try {
      await updateReview(reviewId, {
        adminComment: adminComment,
      });
      console.log("Comment submitted successfully!");

      setReviews((prevReviews) =>
        prevReviews.map((review) => {
          if (review._id === reviewId) {
            return {
              ...review,
              adminComment: adminComment,
            };
          }
          return review;
        })
      );

      setAdminComments((prevComments) => ({
        ...prevComments,
        [reviewId]: "", // Clear the input field after submission
      }));

      Swal.fire({
        title: "Success",
        text: "Comment submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error submitting comment:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit comment",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Reviews</h1>
        <input
          type="text"
          placeholder="Search by user name"
          value={searchReview}
          onChange={searchReviewHandler}
        />
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Product</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Admin Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filteredReviews.map((review, index) => (
              <tr key={review._id}>
                <td>{index + 1}</td>
                <td>
                  {review.user
                    ? `${review.user.firstName} ${review.user.lastName}`
                    : "Unknown User"}
                </td>
                <td>
                  {review.product ? review.product.name : "Unknown Product"}
                </td>
                <td>{review.rating}</td>
                <td>{review.comment}</td>
                <td>
                  {review.adminComment ? (
                    <div>
                      <strong>Manager:</strong> {review.adminComment}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <div className="table-button-group">
                    <input
                      type="text"
                      value={adminComments[review._id] || ""}
                      onChange={(event) =>
                        handleCommentChange(event, review._id)
                      }
                    />
                    <button onClick={() => submitComment(review._id)}>
                      Submit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReviewTable;
