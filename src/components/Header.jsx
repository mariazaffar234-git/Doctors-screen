import '../cssfiles/Header.css'
import logo from "../assets/logo.png";





function Header() {
  return (
    <header className="header">
      <div className="header-logo">
         <img src={logo} alt="Logo" style={{ height: 40 }} />
  
      </div>

      <div className="header-right">
        <button className="icon-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className="icon-btn"><i className="fa-regular fa-bell"></i></button>
        <div className="avatar">A</div>
      </div>
    </header>
  );
}

export default Header;