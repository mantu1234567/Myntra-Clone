import { IoBagAddOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";


const Navigation =({onNavigate,cartItemCount})=>{
    return(
        <>
        <header className="nav-header">
        <div className="logo_container">
            <a href="#"><img className="myntra_home" src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256" alt="Myntra Home"/></a>
        </div>
        <nav className="nav_bar">
        <a href="#" onClick={() => onNavigate('men')}>Men</a>
          <a href="#" onClick={() => onNavigate('women') }>Women</a>
          <a href="#" onClick={() => onNavigate('kids')}>Kids</a>
          <a href="#" onClick={() => onNavigate('home')}>Home & Living</a>
          <a href="#" onClick={() => onNavigate('beauty')}>Beauty</a>
          <a href="#" onClick={() => onNavigate('studio')}>Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <CgProfile />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <GiSelfLove />
                <span className="action_name">Wishlist</span>
            </div>

            <div className="action_container" onClick={() => onNavigate('bag')}>
        <div className="bag-icon-container">
          <IoBagAddOutline className="bag-icon" />
          {cartItemCount > 0 && <span className="bag-item-count">{cartItemCount}</span>}
        </div>
        <span className="action_name">Bag</span>
      </div>
        </div>
    </header>
    </>
    )
}
export default Navigation;