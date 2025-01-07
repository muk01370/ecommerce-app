import React from "react";

const ProductView = ({ isDarkmode }) => {
  return (
    <div
      className={`min-h-screen py-10 px-5 ${isDarkmode ? "bg-[#071739] text-white" : "bg-gray-100 text-gray-800"
        }`}
    >
      {/* Product Container */}
      <div
        className={`max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden ${isDarkmode ? "bg-[#0A1F44]" : "bg-white"
          }`}
      >
        {/* Product Header */}
        <div className="flex flex-col md:flex-row border-b">
          {/* Product Gallery */}
          <div
            className={`md:w-1/2 p-5 flex flex-col items-center border-b md:border-r ${isDarkmode ? "border-gray-700" : "border-gray-200"
              }`}
          >
            <img
              src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
              alt="product"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              {[
                "https://mironcoder-hotash.netlify.app/images/product/single/01.webp",
                "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
                "https://mironcoder-hotash.netlify.app/images/product/single/03.webp",
                "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
              ].map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 border rounded-lg ${isDarkmode ? "border-gray-600" : "border-gray-300"
                    }`}
                />
              ))}
            </div>

          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-5">
            <h2 className="text-2xl font-bold mb-3 leading-snug">
              Formal suits for men wedding slim fit 3 piece dress business party
              jacket
            </h2>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <strong>Brand:</strong> Ecstasy
              </li>
              <li>
                <strong>Category:</strong> Man's
              </li>
              <li>
                <strong>Tags:</strong> Suit, Party, Dress, Smart, Man, Style
              </li>
              <li>
                <strong>Color:</strong> Red, Blue, Green, Yellow, Purple
              </li>
              <li>
                <strong>Size:</strong> SM, MD, LG, XL, XXL
              </li>
              <li>
                <strong>Price:</strong>{" "}
                <span className="line-through text-red-500">$42.00</span>{" "}
                <span className="text-green-500 font-bold">$37.00</span>
              </li>
              <li>
                <strong>Stock:</strong> 68 Pieces
              </li>
              <li>
                <strong>Published:</strong> 02 Feb 2020
              </li>
            </ul>
          </div>
        </div>

        {/* Product Description */}
        <div
          className={`p-5 border-t ${isDarkmode ? "border-gray-700" : "border-gray-200"
            }`}
        >
          <h3 className="text-lg font-semibold mb-3">Product Description</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repellendus expedita esse cupiditate quos doloremque rerum.
            Consequatur voluptate deserunt repellat tenetur debitis.
          </p>
        </div>

        {/* Rating Analytics */}
        <div
          className={`p-5 border-t ${isDarkmode ? "border-gray-700" : "border-gray-200"
            }`}
        >
          <h3 className="text-lg font-semibold mb-4">Rating Analytics</h3>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center space-x-2">
                  <span>{star} Star</span>
                  <div className="w-40 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-yellow-400 rounded"
                      style={{ width: `${star * 20}%` }}
                    ></div>
                  </div>
                  <span>({star * 5})</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">4.9</p>
              <p className="text-yellow-500 text-2xl">★★★★★</p>
              <p className="text-sm text-gray-500">Your Average Rating</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div
          className={`p-5 border-t ${isDarkmode ? "border-gray-700" : "border-gray-200"
            }`}
        >
          <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

          {/* Review Cards */}
          {[
            {
              name: "Miron Mahmud",
              time: "25 minutes ago",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              name: "Tahmina Bonny",
              time: "3 weeks ago",
              content:
                "Omnis quo nostrum dolore fugiat ducimus labore debitis.",
            },
            {
              name: "Labonno Khan",
              time: "15 days ago",
              content:
                "Eius harum tempora quis minima adipisci natus.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg mb-4 shadow-md ${isDarkmode ? "bg-[#0A2540] border-gray-600" : "bg-gray-50"
                }`}
            >
              <p className="font-semibold mb-1">{review.name}</p>
              <p className="text-xs text-gray-500 mb-2">{review.time}</p>
              <p className="text-sm">{review.content}</p>
            </div>
          ))}

          {/* Reply Form */}
          <div className="mt-6">
            <textarea
              rows="4"
              placeholder="Write your reply here"
              className={`w-full p-3 border rounded-md focus:outline-none ${isDarkmode ? "bg-[#071739] text-white border-gray-600" : ""
                }`}
            ></textarea>
            <button
              className={`w-full py-2 mt-3 rounded-md text-white font-semibold ${isDarkmode ? "bg-blue-600" : "bg-blue-500"
                }`}
            >
              Drop Your Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
