import React from "react";

function TheCard({ image, title, description }) {
  return (
    <div className="col-12 col-lg-3 my-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div>
          <a href="#" className="btn btn-primary mx-3 mb-3">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
}

export default TheCard;
