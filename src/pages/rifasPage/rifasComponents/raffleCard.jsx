import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../../../common/utils/utils";

function RaffleCard({
  id,
  image,
  title,
  price,
  init_date,
  participants,
  total_participants,
}) {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate(`/rifa/${id}`);
  };

  return (
    <>
      <div className="rifa-card" onClick={routeChange}>
        <div className="rifa-card-img-container">
          <img src={image} alt="" className="rifa-card-img" />
        </div>
        <div className="rifa-card-txt mt-2 d-flex flex-column px-4">
          <div className=" mb-2 row">
            <div className="col-8">
              <span className="h6">{title}</span>
            </div>
            <div className="col-4">
              <span className="h5 float-end">{price}$</span>
            </div>
          </div>
          <div className=" d-flex">
            <p className="mb-1">
              <span className="h6">Inicio: </span>
              {formatDateTime(init_date)}
            </p>
          </div>
          <div className=" d-flex">
            <p className="">
              <span className="h6">Participantes: </span>
              {participants}/{total_participants}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaffleCard;
