import { faToiletPaper } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { RaffleContext } from "../raffleDetailPage";
import icon from '../../../images/Icon.png';


function RaffleDetailHeader() {
    const {raffle, setRaffle} = useContext(RaffleContext); 
    return (
        <div className="container ps-4 mt-4">
            <h3>{raffle.title}</h3>
            <span>
                <img src={icon} className="mr-2"  alt="" /> {raffle.participants} de {raffle.total_participants}
            </span>
        </div>
    )
}

export default RaffleDetailHeader; 
