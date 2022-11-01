import RaffleDetailDescription from "./raffleDetailDescription";
import RaffleDetailUnitsBox from "./raffleDetailUnitsBox";

function RaffleDetailContainer() {
  return (
    <div className="container rifa-detail-description-container">
      <div className="row px-4">
        <RaffleDetailDescription></RaffleDetailDescription>
        <RaffleDetailUnitsBox></RaffleDetailUnitsBox>
      </div>
    </div>
  );
}

export default RaffleDetailContainer;
