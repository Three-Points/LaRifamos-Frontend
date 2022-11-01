import FilterButton from "./filterButton";
import data from "../../../data/filters.json";
import FilterCard from "./filterCard";
import SearchButton from "./searchButton";
import SearchButtonNavbar from "./searchButtonNavbar";
import { createContext, useContext, useState } from "react";
import { ViewWidthContext } from "../../../App";
import FilterSideMenu from "./filterSideMenu";

export const SideMenuFilterContext = createContext();
export const ActiveFilterContext = createContext();

function RafflesFilters() {
  const filters = data.filters;

  const { viewWidth, setViewWidth } = useContext(ViewWidthContext);
  const [showSideMenuFilter, setShowSideMenuFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

    return (
        <>
            <SideMenuFilterContext.Provider
                value={{ showSideMenuFilter, setShowSideMenuFilter }}
            >
                <ActiveFilterContext.Provider value={{activeFilter, setActiveFilter}}>
                {showSideMenuFilter ? (
                    <FilterSideMenu
                        filters={filters}
                    ></FilterSideMenu>
                ) : (
                    <></>
                )}
                {viewWidth >= 768 ? (
                    <>
                        <SearchButtonNavbar></SearchButtonNavbar>
                        <div className="container d-flex justify-content-between align-items-center mt-4">
                            <div className="category-container d-flex flex-wrap">
                                {filters.map((filter) => {
                                    return (
                                        <FilterCard
                                            type={filter.type}
                                            title={filter.title}
                                            image={filter.image}
                                        ></FilterCard>
                                    )
                                })}
                            </div>
                            <FilterButton></FilterButton>
                        </div>
                    </>
                ) : (
                    <FilterButton></FilterButton>
                )}
                </ActiveFilterContext.Provider>
            </SideMenuFilterContext.Provider>
        </>
    )

}

export default RafflesFilters;
