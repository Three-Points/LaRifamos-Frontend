import { useContext } from "react";
import { CategoryCardContext } from "../rafflesPage";
import RaffleCard from "./raffleCard";

function RafflesList({ raffles, search }) {
  const { categoryCard } = useContext(CategoryCardContext);

  return (
    <>
      <div className="container px-lg-2 mt-5 mb-5">
        <div className="px-lg-2 d-flex justify-content-center justify-content-xl-start flex-row flex-wrap gap-3">
          {raffles
            .filter((raffle) => raffle.title.includes(search))
            .filter(
              (raffle) =>
                raffle.category === categoryCard.title || categoryCard === ""
            )
            .map((raffle) => {
              return (
                <RaffleCard
                  init_date={raffle.init_date}
                  id={raffle.id}
                  image={raffle.images[0].url}
                  participants={raffle.participants}
                  price={raffle.price}
                  title={raffle.title}
                  total_participants={raffle.total_participants}
                ></RaffleCard>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default RafflesList;
