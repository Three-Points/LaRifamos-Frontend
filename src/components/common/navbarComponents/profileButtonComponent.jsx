function ProfileButtonComponent({disableScroll, onButtonClick}) {
    return (
        <div class="col-3 d-flex align-items-center justify-content-evenly mb-3">
            <button
                class="menu-btn"
                onClick={() => {
                    disableScroll()
                    onButtonClick(true)
                }}
            >
                <img
                    src="./imgs/ToggleBars.svg"
                    alt=""
                    className="mx-1"
                />
                <img src="./imgs/Login.svg" alt="" />
            </button>
        </div>
    );
}

export default ProfileButtonComponent; 