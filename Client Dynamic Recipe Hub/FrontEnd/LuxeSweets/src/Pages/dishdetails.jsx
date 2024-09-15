import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import html2canvas from "html2canvas";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Flag,
  CornerDownRight,
  DollarSign,
  Package,
  Info,
  Send,
  PlusCircle,
  Star,
} from "lucide-react";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
const DishDetail = () => {
  const [dessert, setDessert] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [Favorites, setFavorites] = useState(0);
  const [isFavorites, setIsFavorites] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const storedRecipe = JSON.parse(sessionStorage.getItem("selectedDessert"));
    const fetchdata = async () => {
      if (!storedRecipe || !storedRecipe._id) {
        console.error("Recipe not found in sessionStorage");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:1001/api/dish/${storedRecipe._id}`
        );
        const data = response.data;
        setDessert(data);
        setLikes(data.ratings[0]?.likes?.length || 0);
        setFavorites(data.ratings[0]?.Favorites?.length || 0);

        // Check if the user has liked this dish before
        const likedStatus = sessionStorage.getItem(`liked_${storedRecipe._id}`);
        setIsLiked(likedStatus === "true");

        const FavoritesStatus = sessionStorage.getItem(
          `Favorites_${storedRecipe._id}`
        );
        setIsFavorites(FavoritesStatus === "true");
        setComments(data.ratings[0]?.comments || []);
      } catch (e) {
        console.log(e);
      }
    };

    fetchdata();
  }, []);

  const handleLike = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1001/api/dish/${dessert._id}/like`,
        {},
        {
          withCredentials: true,
        }
      );
      setLikes(response.data.likes);

      // Toggle the like status
      const newLikedStatus = !isLiked;
      setIsLiked(newLikedStatus);

      // Store the like status in sessionStorage
      sessionStorage.setItem(`liked_${dessert._id}`, newLikedStatus.toString());
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  };
  const handleFavorites = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1001/api/dish/${dessert._id}/Favorites`,
        {},
        {
          withCredentials: true,
        }
      );
      setFavorites(response.data.Favorites);

      // Toggle the like status
      const newFavoritesStatus = !isFavorites;
      setIsFavorites(newFavoritesStatus);

      // Store the like status in sessionStorage
      sessionStorage.setItem(
        `Favorites_${dessert._id}`,
        newFavoritesStatus.toString()
      );
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  };

  const handleReport = () => {
    MySwal.fire({
      title: "Report this dish",
      input: "select",
      inputOptions: {
        inappropriate: "Inappropriate",
        offensive: "Offensive",
        spam: "Spam",
        other: "Other",
      },
      inputPlaceholder: "Select a reason",
      showCancelButton: true,
      confirmButtonText: "Submit Report",
      showLoaderOnConfirm: true,
      preConfirm: (reason) => {
        if (!reason) {
          Swal.showValidationMessage("Please select a reason for reporting");
        } else {
          return axios
            .put(
              `http://localhost:1001/api/dish/${dessert._id}/report`,
              {
                reason,
              },
              {
                withCredentials: true,
              }
            )
            .then((response) => {
              if (response.status !== 200) {
                throw new Error(response.statusText);
              }
              return response.data;
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          icon: "success",
          title: "Thank you for your report!",
          text: "We will review this dish based on your feedback.",
        });
      }
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await axios.put(
          `http://localhost:1001/api/dish/${dessert._id}/comment`,
          {
            text: newComment,
            parentId: replyTo || null, // Send replyTo or null
          },
          {
            withCredentials: true,
          }
        );
        setComments(response.data);
        setNewComment("");
        setReplyTo(null); // Reset replyTo after submission
      } catch (error) {
        console.error("Failed to post comment:", error);
      }
    }
  };

  const handleReply = (commentId) => {
    setReplyTo(commentId);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        const component = document.getElementById("componentToShare");
        const canvas = await html2canvas(component);
        const image = canvas.toDataURL(`${dessert.images[0]}`);

        // يمكنك الآن تحميل الصورة على خادم أو مشاركة الرابط الموجود
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], "shared-dessert.png", {
          type: blob.type,
        });

        navigator
          .share({
            title: dessert.title,
            text: "Check out this dessert!",
            files: [file], // مشاركة الصورة كملف
            url: window.location.href, // مشاركة الرابط أيضا
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        console.log("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Failed to share recipe:", error);
    }
  };

  if (!dessert)
    return <div className="text-center p-8 text-gray-600">Loading...</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-[#F5F0E1] min-h-screen">
        <div id="componentToShare">
          <div className="bg-[#FFF4E6] shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={dessert.images[0]}
                alt={dessert.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F2A1D] to-transparent"></div>
              <h1 className="absolute bottom-4 left-6 text-4xl font-bold text-white">
                {dessert.name}
              </h1>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-2xl font-semibold text-[#D2691E]">
                  <DollarSign className="w-6 h-6 mr-1" />
                  <span>{dessert.price.toFixed(2)}</span>
                </div>
                <div className="flex space-x-4">
                <button
                    onClick={handleFavorites}
                    className={`flex items-center space-x-2 ${
                      isFavorites ? "text-[#cac22d]" : "text-gray-600"
                    } hover:text-pink-500 transition`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        isFavorites ? "fill-[#fff200]" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 ${
                      isLiked ? "text-pink-500" : "text-gray-600"
                    } hover:text-pink-500 transition`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>{likes}</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="text-gray-600 hover:text-blue-500 transition"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleReport}
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    <Flag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#4E3B2A] flex items-center">
                    <Info className="w-6 h-6 mr-2 text-[#8B4513]" />
                    Description
                  </h2>
                  <p className="text-[#5D3A1A]">{dessert.description}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-[#4E3B2A] flex items-center">
                      <Package className="w-5 h-5 mr-2 text-[#A0522D]" />
                      Available Quantity
                    </h2>
                    <p className="text-[#5D3A1A]">
                      {dessert.availableQuantity}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-[#4E3B2A] flex items-center">
                      <Package className="w-5 h-5 mr-2 text-[#D2B48C]" />
                      Size
                    </h2>
                    <p className="text-[#5D3A1A]">{dessert.size}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#4E3B2A] flex items-center">
            <MessageSquare className="w-6 h-6 mr-2 text-[#8B4513]" />
            Comments
          </h2>

          <form
            onSubmit={(e) => handleCommentSubmit(e)}
            className="flex items-center space-x-2 mb-6"
          >
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow p-3 border border-[#D2B48C] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition"
              placeholder="Write a comment..."
            />
            <button
              type="submit"
              className="p-3 bg-[#8B4513] text-white rounded-full hover:bg-[#6F3F2A] transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-600">No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-white rounded-lg shadow-sm p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-full">
                      <p className="font-semibold text-[#4E3B2A]">
                        {comment.user.name}
                      </p>
                      <p className="mt-1 bg-[#F8F8F8] py-4 rounded-lg pl-4 font-bold text-[#5D3A1A]">
                        {comment.text}
                      </p>
                    </div>
                    <button
                      onClick={() => handleReply(comment._id)}
                      className="text-[#8B4513] hover:underline flex items-center space-x-1"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </div>

                  {replyTo === comment._id && (
                    <form
                      onSubmit={(e) => handleCommentSubmit(e, comment._id)}
                      className="mt-4 flex items-center space-x-2"
                    >
                      <input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-grow p-2 border border-[#D2B48C] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition"
                        placeholder="Write a reply..."
                      />
                      <button
                        type="submit"
                        className="p-2 bg-[#8B4513] text-white rounded-full hover:bg-[#6F3F2A] transition"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}

                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 ml-6 space-y-4 border-l-2 pl-3 border-solid border-[#6F3F2A]">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply._id}
                          className="bg-[#F8F8F8] rounded-lg p-3"
                        >
                          <p className="font-semibold text-[#4E3B2A]">
                            {reply.authorName}
                          </p>
                          <p className="mt-1 text-[#5D3A1A]">{reply.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DishDetail;
