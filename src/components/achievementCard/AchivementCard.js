import React from "react";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <div>
            {cardInfo.points.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
      </div>
  );
}
