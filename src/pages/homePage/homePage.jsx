import InitialSection from './homePageComponents/initialSection';
import FeaturesSection from './homePageComponents/featuresSection';
import OnlyForYouSection from './homePageComponents/onlyForYouSection';
import StartWinningSection from './homePageComponents/startWinningSection';
import data from '../../data/onlyForMe.json'; 

function HomePage() {

    const seccionParaTi = data.onlyForMe; 
    return (
        <>
            <InitialSection></InitialSection>
            {/* Sección iconos */}
            <FeaturesSection></FeaturesSection>
            {/* Sección Solo Para Ti */}
            <OnlyForYouSection {...seccionParaTi}></OnlyForYouSection>
            

            {/* Sección Empieza a Ganar */}
            <StartWinningSection></StartWinningSection>
        </>
    )
}

export default HomePage
