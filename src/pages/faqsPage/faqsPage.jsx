import TabsComponentFAQS from "./tabsComponentFAQs";

function FaqsPage() {

    const preguntas = [
        {
            titulo: "Asuntos Generales",
            preguntas: [
                {
                    pregunta: "¿Cómo genero mi código amigo?",
                    respuesta: "Tu código amigo se genera con tu primer compra confirmada. En ese momento te enviamos un correo electrónico y también puedes verlo en tu perfil de cuenta."
                }, 
                {
                    pregunta: "¿Cómo genero descuentos con mi código amigo?", 
                    respuesta: "Debes compartir tu código con tus amigos. Por cada amigo que realice una compra utilizando tu código generarás descuentos para tus próximas compras!"
                }
            ]
        }, 
        {
            titulo: "Nuestras Rifas", 
            preguntas: []
        }, 
        {
            titulo: "Nuestro Registros", 
            preguntas: []
        }, 
        {
            titulo: "Sobre Pagos",
            preguntas: []
        }
    ]
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