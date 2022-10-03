

function RaffleCard ({image, title, prize, init_date, participants, total_participants}) {
    return (
        <>
            <div className="rifa-card">
                <div className="rifa-card-img-container">
                    <img src={image} alt="" className="rifa-card-img"/>
                </div>
                <div className="rifa-card-txt d-flex flex-column px-4">
                    <div className="mx-2 mb-2">
                        <span className="h6">{title}</span>
                        <span className="h5 float-end">{prize}$</span>
                    </div>
                    <div className="mx-2 d-flex">
                        <p className=""><span className="h6">Inicio: </span>{init_date}</p>
                    </div>
                    <div className="mx-2 d-flex">
                        <p className=""><span className="h6">Participantes: </span>{participants}/{total_participants}</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default RaffleCard; 