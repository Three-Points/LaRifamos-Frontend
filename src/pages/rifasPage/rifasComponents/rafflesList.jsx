import { useContext } from "react";
import { CategoryCardContext } from "../rafflesPage";
import RaffleCard from "./raffleCard";

function RafflesList({ raffles, search }) {
  const { categoryCard } = useContext(CategoryCardContext);

function RafflesList({raffles, search}) {

    const {categoryCard} = useContext(CategoryCardContext); 

    return (
        <>
            <div className="container px-lg-2 mt-5 mb-5">
                <div className="px-lg-2 d-flex justify-content-center justify-content-xl-start flex-row flex-wrap gap-3">
                    {raffles.filter((raffle) => raffle.name.includes(search))
                            .filter((raffle) => raffle.category === (categoryCard.type) || categoryCard === "")
                            .map((raffle) => {
                                return <RaffleCard init_date={raffle.drawDate}
                                            id={raffle.id}
                                            image={raffle.products[0].images[0]}
                                            participants={raffle.participants}
                                            price={raffle.ticketCost}
                                            title={raffle.name}
                                            total_participants="50"></RaffleCard>;
                            })}
                </div>
            </div>
        </>
    );
}

export default RafflesList;
