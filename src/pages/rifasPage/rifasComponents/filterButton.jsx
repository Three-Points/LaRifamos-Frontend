
import { useContext } from 'react';
import { SideMenuFilterContext } from './rafflesFilters'; 

function FilterButton() {

    const {showSideMenuFilter, setShowSideMenuFilter } = useContext(SideMenuFilterContext); 

    return (
        <div class="mx-5">
            <a
                href="javascript:void(0)"
                class="mx-5 rifas-btn d-flex align-content-center justify-content-center"
                onClick={()=> setShowSideMenuFilter(true)}
            >
                <img src="./imgs/filtros.svg" alt="" />
                <span>Filtros</span>
            </a>
        </div>
    )
}

export default FilterButton; 
