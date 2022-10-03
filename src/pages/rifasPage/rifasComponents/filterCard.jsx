import { useContext} from "react";
import { CategoryCardContext } from "../rafflesPage";

function FilterCard({title, image}) {
    const {categoryCard, setCategoryCard} = useContext(CategoryCardContext);

    //TODO -> handleClick: revisar que si se clica siendo activo o no el elemento. En caso de segundo click en activo, se quita el filtro de categoria. 
    

    return (
        <div className="d-flex justify-content-center flex-column text-center">
            <div className="category-filter d-flex flex-column align-items-center justify-content-center" onClick={() => setCategoryCard({title})}>
                <img src={image} alt="" />
            </div>
            <p>{title}</p>
        </div>

    )
}
export default FilterCard; 