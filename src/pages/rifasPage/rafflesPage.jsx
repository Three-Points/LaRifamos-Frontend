import data from "../../data/rifasPage.mock.json";
import { createContext, useState, useEffect } from "react";
import SearchButton from "./rifasComponents/searchButton";
import RafflesList from "./rifasComponents/rafflesList";
import RafflesFilters from "./rifasComponents/rafflesFilters";
import { getRaffles } from "../../services/raffles.service";
import Spinner from "../../common/spinner";

export const CategoryCardContext = createContext();
export const SearchRaffleContext = createContext();

function RafflesPage() {
  const [search, setSearch] = useState("");
  const [categoryCard, setCategoryCard] = useState("");
  const [raffles, setRaffles] = useState("");
  const [showRaffles, setShowRaffles] = useState(false);

    useEffect(() => {
        console.log("Entro")
        getRaffles().then((response) => {
            console.log(response.data);
            let raffles_obtained = {
                "raffles": response.data.results
            }
            console.log(raffles_obtained); 
            setRaffles(raffles_obtained.raffles); 
            setShowRaffles(true); 
        }).catch(() => {
            //Show error
        })
    }, [])


  return (
    <div className="content">
      <CategoryCardContext.Provider value={{ categoryCard, setCategoryCard }}>
        <SearchRaffleContext.Provider value={{ search, setSearch }}>
          <RafflesFilters></RafflesFilters>
          {showRaffles ? (
            <RafflesList raffles={raffles} search={search}></RafflesList>
          ) : (
            <Spinner></Spinner>
          )}
        </SearchRaffleContext.Provider>
      </CategoryCardContext.Provider>
    </div>
  );
}

export default RafflesPage;
