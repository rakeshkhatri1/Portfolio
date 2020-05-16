import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map(card => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  image: card.image,
                  points: card.points
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
