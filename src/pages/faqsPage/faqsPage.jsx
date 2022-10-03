import TabsComponentFAQS from "./tabsComponentFAQs";
import data from '../../data/faqs.json'; 

function FaqsPage() {

    const preguntas = data.faqs; 
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Preguntas Frecuentes</h1>
                <TabsComponentFAQS preguntas={preguntas}></TabsComponentFAQS>
            </div>
        </>
    );
}

export default FaqsPage; 