import { useContext, useEffect, useState } from 'react'
import { CategoryCardContext } from '../rafflesPage'
import { ActiveFilterContext } from './rafflesFilters'

function FilterCard({ type, title, image }) {
    const { categoryCard, setCategoryCard } = useContext(CategoryCardContext)
    const {activeFilter, setActiveFilter} = useContext(ActiveFilterContext); 

    const handleClick = (typeClicked) => {
        console.log(title, activeFilter); 
        if(activeFilter !== title) {
            console.log(activeFilter); 
            setCategoryCard({type});
            setActiveFilter(typeClicked);
            console.log("entro aqui")
        } else {
            setActiveFilter('');
            setCategoryCard(''); 
        }
          
    }

    return (
        <div className="category-filter-container d-flex justify-content-center flex-column text-center">
            <div
                className={`${activeFilter.includes(type) ? 'category-filter-active': 'category-filter'}  d-flex flex-column align-items-center justify-content-center`}
                onClick={() => {handleClick(type)}}
            >
                <img src={image} alt="" />
            </div>

            <p>{title}</p>
        </div>
    )
}
export default FilterCard
