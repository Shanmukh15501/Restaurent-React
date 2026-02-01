import { RCARD_DESIGN } from "../utils/Constants";

const RCard = ({ name, locality, cuisines, avgRating }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "grey" }}>
      <img src={RCARD_DESIGN}></img>
      
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RCard;