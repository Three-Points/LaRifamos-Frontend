import { useContext, useState } from 'react'
import { RaffleContext } from '../../raffleDetailPage'

import add from '../../../../images/add.svg'
import minus from '../../../../images/minus.svg'

function UnitsBoxPrice() {
    const [units, setUnits] = useState(1)
    const { raffle, setRaffle } = useContext(RaffleContext)

    const substractUnits = () => {
        if (units === 1) {
            return
        } else {
            setUnits(units - 1)
        }
    }

    const addUnits = () => {
        setUnits(units + 1)
    }

    return (
        <>
            <div class="col-12 rifa-detail-table-cell d-flex align-items-center flex-wrap">
                <span class="h6 m-2">Precio por participación: </span>

                <span class="h6 fs-4 m-2">${raffle.ticketCost * units}</span>
            </div>
            <div className="col-12 rifa-detail-table-cell d-flex align-items-center">
                <p className='h6 m-2'>Unidades: </p>
                <div className="d-flex align-items-center m-2">
                <button
                    class="rifa-detail-prize"
                    onClick={substractUnits}
                >
                    <img class="rifa-detail-prize-icon" src={minus} alt="" />
                </button>
                <span class="mx-2">{units}</span>
                <button class="rifa-detail-prize" onClick={addUnits}>
                    <img src={add} alt="" />
                </button>
                </div>
                
            </div>
        </>
    )
}

export default UnitsBoxPrice
