import UnitsBoxButton from "./raffleDetailUnitsBoxComponents/unitsBoxButton";
import UnitsBoxDates from "./raffleDetailUnitsBoxComponents/unitsBoxDates";
import UnitsBoxIssues from "./raffleDetailUnitsBoxComponents/unitsBoxIssues";
import UnitsBoxPrice from "./raffleDetailUnitsBoxComponents/unitsBoxPrice";

function RaffleDetailUnitsBox () {
    return (
        <div class="col-12 col-lg-5 only-fy-section mt-0 order-0 mb-5">
            <div
              class="row p-5 pb-2 justify-content-center"
            >
              <div class="row rifa-detail-table px-0">
                <UnitsBoxDates></UnitsBoxDates>
                <UnitsBoxPrice></UnitsBoxPrice>
              </div>
                <UnitsBoxButton></UnitsBoxButton>
                <UnitsBoxIssues></UnitsBoxIssues>
            </div>
          </div>
    );

}

export default RaffleDetailUnitsBox; 