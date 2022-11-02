import { useContext } from "react";
import FilterMultiCheckComponent from "./filterCheckComponent";
import SearchButton from "./searchButton";
import { ViewWidthContext } from "../../../App";
import FilterCard from "./filterCard";
import FilterSideMenuAplicarButton from "./filterSideMenuAplicarButton";
import { SideMenuFilterContext } from "./rafflesFilters";

function FilterSideMenu({ filters }) {
  const { viewWidth, setViewWidth } = useContext(ViewWidthContext);
  const { showSideMenuFilter, setShowSideMenuFilter } = useContext(
    SideMenuFilterContext
  );

  return (
    <div class="sideMenu ">
      <div class="row mb-5 pt-3">
        <a
          href="javascript:void(0)"
          class="mx-3"
          onClick={() => setShowSideMenuFilter(false)}
        >
          <img src="./imgs/Cross.svg" alt="" class="img-side-menu" />
        </a>
      </div>
      <div class="row justify-content-center px-3">
        {viewWidth <= 768 ? (
          <>
            <div class="col-12">
              <h6>Búsqueda: </h6>
            </div>
            <div class="col">
              <SearchButton></SearchButton>
            </div>

            <div class="col-12 mt-3">
              <h6>Categorías:</h6>
            </div>
            <div class="col">
              <div class="category-container d-flex flex-wrap">
                {filters.map((filter) => {
                  return (
                    <FilterCard
                      type={filter.type}
                      title={filter.title}
                      image={filter.image}
                    ></FilterCard>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div class="col-12 mt-3">
          <h6>Estado:</h6>
        </div>
        <FilterMultiCheckComponent></FilterMultiCheckComponent>
        <div className="col-12 mt-3 text-center">
          <FilterSideMenuAplicarButton></FilterSideMenuAplicarButton>
        </div>
      </div>
    </div>
  );
}

export default FilterSideMenu;
