import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card({ detail }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="col-md-12 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
        <div className="position-relative">
          <img
            src={detail.imgUrl}
            className="card-img-top img-fluid"
            alt={detail.detailsName}
            style={{ height: "200px", objectFit: "cover" }}
          />

          {detail.isGuestFav && (
            <span className="position-absolute top-0 start-0 m-2 badge bg-danger shadow-sm">
              Guest Favorite
            </span>
          )}

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="position-absolute top-0 end-0 m-2 bg-white rounded-circle p-2 shadow-sm border-0"
            style={{ lineHeight: 0 }}
          >
            {isFavorite ? (
              <FaHeart className="text-danger" size={18} />
            ) : (
              <FaRegHeart className="text-dark" size={18} />
            )}
          </button>
        </div>
        <div className="card-body">
          <h6 className="card-title fw-bold">{detail.detailsName}</h6>
          <p className="card-text text-muted mb-1">
            <strong>${detail.price}</strong> / night
          </p>
          <p className="card-text mb-0">⭐ {detail.rating}</p>
        </div>

        <div className="card-footer bg-white border-0">
          <small className="text-muted">{detail.location}</small>
        </div>
      </div>
    </div>
  );
}
