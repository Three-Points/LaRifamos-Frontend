import FilterButton from "./filterButton";
import data from '../../../data/filters.json';
import FilterCard from "./filterCard";

function RafflesFilters() {
    const filters = data.filters;


    return (
        <>
            <div class="container d-flex justify-content-between align-items-center mt-4">
                <div class="category-container d-flex mx-4">
                    {filters.map((filter) => {
                        return <FilterCard title={filter.title} image={filter.image}
                                ></FilterCard>
                    })}
                </div>
                <FilterButton></FilterButton>
            </div>
        </>
    );
}

export default RafflesFilters; 