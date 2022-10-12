import { useContext } from "react";
import { RaffleContext } from "../raffleDetailPage";

function RaffleDetailDescription() {
  const { raffle, setRaffle } = useContext(RaffleContext);

  return (
    <div className="col-12 col-lg-7 order-1 order-lg-0 mt-5 mt-md-0">
      <div className="d-flex align-content-center align-items-center gap-5">
        <h3>Sorteado por {raffle.user}</h3>
        <span className="rifa-detail-img-profile">
          <img src="" alt="" />
        </span>
      </div>
      <hr className="rifa-detail-line" />
      <div className="mt-4 rifa-detail-description">
        <h6>Descripción</h6>
        <p>{raffle.description}</p>
      </div>
    </div>
  );
}

export default RaffleDetailDescription;
