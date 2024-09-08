export default function Navbar (){
    return(
        <header>

        <div className="container">
    
          <nav className="navbar">
    
            <a href="#">
              <img src={require("../../assets/images/logo-light.png")} alt="SimpleBlog logo" width="150" />
            </a>
    
            <div className="btn-group">
    
              <button className="theme-btn theme-btn-mobile light">
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>
    
              <button className="nav-menu-btn">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
    
            </div>
    
            <div className="flex-wrapper">
    
              <ul className="desktop-nav">
    
                <li>
                  <a href="#" className="nav-link">Home</a>
                </li>
    
                <li>
                  <a href="#" className="nav-link">About Me</a>
                </li>
    
                <li>
                  <a href="#" className="nav-link">Contact</a>
                </li>
    
              </ul>
    
              <button className="theme-btn theme-btn-desktop light">
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>
    
            </div>
    

    
          </nav>
    
        </div>
    
      </header>
    )
}