function SearchButton({onSearch}) {

    let handleKeyDown = (e) => {
        let input = document.getElementById("rifas-search"); 
        if (e.key === 'Enter') {
            onSearch(input.value); 
        }
    }

    let handleClick = (e) => {
        let input = document.getElementById("rifas-search"); 
        onSearch(input.value); 
    }

    return (
        <div className="mb-5 order-3 order-md-2 rifas-search-container">
            <div className="rifas-search px-3 d-flex align-content-center align-items-center">
                <input id="rifas-search" className="mx-2" type="text" name="" placeholder="Buscar productos..."  onKeyDown={handleKeyDown}/>
                <span className="rifas-search-button d-flex align-items-center justify-content-center" onClick={handleClick}><img src="./imgs/Lupa.svg" alt="" className="img-lupa" /></span>
            </div>
        </div>
    );
}

export default SearchButton; 