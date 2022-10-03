function ProfileButtonComponent({disableScroll, onButtonClick}) {
    return (
        <div class="d-flex flex-lg-grow-1 align-items-center justify-content-end mb-3 order-2 order-md-3">
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