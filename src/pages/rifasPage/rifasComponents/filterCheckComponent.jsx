function FilterMultiCheckComponent() {
    return (
        <div class="col">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Rifas Activas
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Rifas finalizadas
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Rifas canceladas
                </label>
            </div>
        </div>
    )
}

export default FilterMultiCheckComponent
