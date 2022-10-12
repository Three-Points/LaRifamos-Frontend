import { useContext } from 'react';
import {SideMenuFilterContext} from './rafflesFilters'; 

function FilterSideMenuAplicarButton () {

    const {showSideMenuFilter, setShowSideMenuFilter } = useContext(SideMenuFilterContext); 

    return (
        <div class="mx-5">
            <a
                href="javascript:void(0)"
                className="mx-3 rifas-btn d-flex align-content-center justify-content-center"
                onClick={() => setShowSideMenuFilter(false)}
            >
                <span>Aplicar filtros</span>
            </a>
        </div>
    ); 
}

export default FilterSideMenuAplicarButton; 