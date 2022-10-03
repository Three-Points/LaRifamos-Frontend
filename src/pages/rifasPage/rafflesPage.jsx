import data from '../../data/rifasPage.mock.json';
import { createContext, useState } from "react";
import SearchButton from "./rifasComponents/searchButton";
import RafflesList from "./rifasComponents/rafflesList";
import RafflesFilters from "./rifasComponents/rafflesFilters";

export const CategoryCardContext = createContext();

function RafflesPage() {

    const raffles = data.raffles;
    const [search, setSearch] = useState("");
    const [categoryCard, setCategoryCard] = useState("");

    return (
        <>
            <SearchButton onSearch={(str) => setSearch(str)}></SearchButton>
            <CategoryCardContext.Provider value={{categoryCard, setCategoryCard}}>
                <RafflesFilters></RafflesFilters>
                <RafflesList raffles={raffles} search={search}></RafflesList>
            </CategoryCardContext.Provider>        
        </>
    );
}

export default RafflesPage;


