import { useContext, useState } from "react";
import { RaffleContext } from "../../raffleDetailPage";

import add from '../../../../images/add.svg';
import minus from '../../../../images/minus.svg';

function UnitsBoxPrice() {
    const [units, setUnits] = useState(1); 
    const {raffle, setRaffle} = useContext(RaffleContext);

    const substractUnits = () => {
        if(units === 1) {
            return; 
        } else {
            setUnits(units - 1);
        }
    }

    const addUnits = () => {
        setUnits(units + 1); 
    }

    return (
        <div class="col-12 rifa-detail-table-cell d-flex align-items-center">
            <span class="me-3">Precio por participación: </span>

            <button class="rifa-detail-prize-minus" onClick={substractUnits}>
                <img
                    class="rifa-detail-prize-icon"
                    src={minus}
                    alt=""
                />
            </button>
            <span class="mx-2">{units}</span>
            <button class="rifa-detail-prize-add" onClick={addUnits}>
                <img src={add} alt="" />
            </button>

            <span class="ms-5">${raffle.price * units}</span>
        </div>
    )
}

export default UnitsBoxPrice; 
