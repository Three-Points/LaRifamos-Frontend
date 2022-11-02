import { useState } from "react";
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
  const [likeState, setLikeState] = useState(false);

  const routeChange = () => {
    navigate(`/rifa/${id}`);
  };

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setLikeState(!likeState);
  };

  return (
    <>
      <div className="rifa-card" onClick={routeChange}>
        <div className="rifa-card-img-container">
          <div
            className="rifa-like"
            onClick={(event) => handleLikeClick(event)}
          >
            {!likeState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className={
                  likeState ? "bi bi-heart-fill rifa-liked" : "bi bi-heart"
                }
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="red"
                class="bi bi-heart-fill rifa-liked"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            )}
          </div>

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
