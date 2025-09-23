import { original, cairo, weekEnd, PopularCairo } from "../Data/experience.js";
const Experience = () => {
  return (
    <>
      <div className="head-card">
        <div>
          Airbnb Original <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="slide">
          <a href="#">
            <i class="fa-solid fa-angle-left"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="original-cards">
        {original.map((ori) => (
          <div className="original-card" key={ori.id}>
            <i class="fa-regular fa-heart"></i>
            <span className="badge">Original</span>
            <img src={ori.image} alt="" />
            <h2>{ori.title}</h2>
            <p>{ori.country}</p>
            <p className="card-footer">
              <span className="cost">{ori.cost}</span>{" "}
              <span className="dot">.</span>
              <span className="rating">
                <i className="fa-solid fa-star"></i> {ori.rate}
              </span>
            </p>
          </div>
        ))}
      </div>
      {/* .............................................. */}
      <div className="head-card">
        <div>
          Tomorrow in Cairo <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="slide">
          <a href="#">
            <i class="fa-solid fa-angle-left"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="original-cards">
        {cairo.map((ori) => (
          <div className="original-card" key={ori.id}>
            <i class="fa-regular fa-heart"></i>
            <span className="badge">{ori.num}</span>
            <img src={ori.image} alt="" />
            <h2>{ori.title}</h2>
            {/* <p>{ori.country}</p> */}
            <p className="card-footer">
              <span className="cost">{ori.cost}</span>{" "}
              <span className="dot">.</span>
              <span className="rating">
                <i className="fa-solid fa-star"></i> {ori.rate}
              </span>
            </p>
          </div>
        ))}
      </div>
      {/* ................................. .....................*/}
      <div className="head-card">
        <div>
          Experiences this weekend <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="slide">
          <a href="#">
            <i class="fa-solid fa-angle-left"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="original-cards">
        {weekEnd.map((ori) => (
          <div className="original-card" key={ori.id}>
            <i class="fa-regular fa-heart"></i>
            <span className="badge">{ori.num}</span>
            <img src={ori.image} alt="" />
            <h2>{ori.title}</h2>
            {/* <p>{ori.country}</p> */}
            <p className="card-footer">
              <span className="cost">{ori.cost}</span>{" "}
              <span className="dot">.</span>
              <span className="rating">
                <i className="fa-solid fa-star"></i> {ori.rate}
              </span>
            </p>
          </div>
        ))}
      </div>
      {/* ........................................................... */}
      <div className="head-card">
        <div>Popular experiences in Cairo</div>
        <div className="slide">
          <a href="#">
            <i class="fa-solid fa-angle-left"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="original-cards">
        {PopularCairo.map((ori) => (
          <div className="original-card" key={ori.id}>
            <i class="fa-regular fa-heart"></i>
            <span className="badge">Popular</span>
            <img src={ori.image} alt="" />
            <h2>{ori.title}</h2>
            {/* <p>{ori.country}</p> */}
            <p className="card-footer">
              <span className="cost">{ori.cost}</span>{" "}
              <span className="dot">.</span>
              <span className="rating">
                <i className="fa-solid fa-star"></i> {ori.rate}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
