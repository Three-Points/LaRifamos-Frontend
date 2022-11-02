import { useState } from "react";

function TabsComponentFAQS({ questions }) {
  const [opcionActiva, setOpcionActiva] = useState(questions[0]);

  return (
    <div className="container mt-2 mt-lg-5 mb-5">
      <div className="col-12 d-flex align-content-center align-items-center mt-5 tab-opciones">
        {questions.map((opcion) => {
          return (
            <div
              className="col text-center"
              onClick={() => setOpcionActiva(opcion)}
            >
              <p className="mb-2">{opcion.title}</p>
            </div>
          );
        })}
      </div>
      <div
        id="tab-menu"
        className="col-12 d-flex justify-content-between tab-menu"
      >
        {questions.map((opcion) => {
          return opcion.title === opcionActiva.title ? (
            <div
              className="tab-menu-item bg-primary"
              onClick={() => setOpcionActiva(opcion)}
            ></div>
          ) : (
            <div
              className="tab-menu-item"
              onClick={() => setOpcionActiva(opcion)}
            ></div>
          );
        })}
      </div>
      <div className="container px-lg-4 mt-5 d-flex align-items-center align-content-center">
        <div className="col-12 px-2 px-md-5">
          {opcionActiva.questions.map((question) => {
            return (
              <>
                <h6 className="mb-1">{question.question}</h6>
                <p className="mb-5">{question.answer}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TabsComponentFAQS;
