import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRaffleDetail } from "../../services/raffles.service";
import RaffleDetailContainer from "./raffleDetailComponents/raffleDetailContainer";
import RaffleDetailHeader from "./raffleDetailComponents/raffleDetailHeader";
import RaffleDetailImages from "./raffleDetailComponents/raffleDetailImages";

export const RaffleContext = createContext();

function RaffleDetailPage() {
  const [raffle, setRaffle] = useState("");
  const [showRaffle, setShowRaffle] = useState(false);
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    getRaffleDetail(params.id)
      .then((response) => {
        console.log(response);
        setRaffle(response.data);
        setShowRaffle(true);
      })
      .catch((error) => {
        //Do something with error
      });
  }, []);

  return (
    <div className="container mb-5 content">
      <RaffleContext.Provider value={{ raffle, setRaffle }}>
        {showRaffle ? (
          <>
            <RaffleDetailHeader></RaffleDetailHeader>
            <RaffleDetailImages></RaffleDetailImages>
            <RaffleDetailContainer></RaffleDetailContainer>
          </>
        ) : (
          <></>
        )}
      </RaffleContext.Provider>
    </div>
  );
}

export default RaffleDetailPage;
