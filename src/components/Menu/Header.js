import NavBar from "./NavBar";
//import logo from 'src/images/KKstevensLogo.svg';
const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
            KKSPC
            
        </a>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;