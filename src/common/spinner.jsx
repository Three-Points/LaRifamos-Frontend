function Spinner() {
    return (
        <div className="d-flex justify-content-center flex-column m-5">
            <div className="spinner-border mt-5 mb-2 mx-auto" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p className="mx-auto">Loading...</p>
        </div>
    );
}

export default Spinner; 