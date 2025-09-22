export default function Card({ detail }) {
  return (
    <div className="col-md-12 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={detail.imgUrl}
          className="card-img-top img-fluid rounded"
          alt={detail.detailsName}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h6 className="card-title fw-bold">{detail.detailsName}</h6>
          <p className="card-text text-muted mb-1">
            <strong>${detail.price}</strong> / night
          </p>
          <p className="card-text mb-0">
            ⭐ {detail.rating}{" "}
            {detail.isGuestFav && (
              <span className="badge bg-danger ms-2">Guest Favorite</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
