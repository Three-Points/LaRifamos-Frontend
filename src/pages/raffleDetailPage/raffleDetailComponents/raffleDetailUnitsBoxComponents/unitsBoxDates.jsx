import { useContext } from "react";
import { formatDateTime } from "../../../../common/utils/utils";
import { RaffleContext } from "../../raffleDetailPage";

function UnitsBoxDates() {
    const {raffle, setRaffle} = useContext(RaffleContext); 
    return (
        <>
            <div class="col-6 rifa-detail-table-cell">
                <h6>Fecha del sorteo:</h6>
                <h5>{formatDateTime(raffle.raffle_date)}</h5>
            </div>
            <div class="col-6 rifa-detail-table-cell">
                <h6>Fecha del entrega:</h6>
                <h5>{formatDateTime(raffle.delivery_date)}</h5>
            </div>
        </>
    )
}

export default UnitsBoxDates;