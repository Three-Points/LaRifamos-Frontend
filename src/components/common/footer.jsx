import SocialNetworksComponent from './footerComponents/socialNetworksComponent'
import WebLinksComponent from './footerComponents/webLinksComponent'

function Footer() {
    return (
        <footer class="">
            <div class="d-flex flex-column flex-md-row align-content-md-center align-items-md-center justify-content-md-center pb-md-3 gap-md-5">
                <WebLinksComponent></WebLinksComponent>
                <SocialNetworksComponent></SocialNetworksComponent>
                <p class="order-3 order-md-1 mt-3 mb-0 pb-4 pb-md-0 text-center fs-80">
                    © 2022 LaRifamos
                </p>
            </div>
        </footer>
    )
}

export default Footer
