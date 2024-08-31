import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import MyntraBanner from "./components/MyntraBanner";
import BagItems from "./components/bagItems";
import { CgHome } from "react-icons/cg";
import Women from "./components/Women";
import Kitchen from "./components/Kitchen";
import Kids from "./components/Kids";
function App() {
  const [currentPage, setCurrentPage] = useState("men");
  const [cartItems, setCartItems] = useState([]);

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  const handleAddToBag = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const deleteBagItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Navigation onNavigate={handleNavigationClick} cartItemCount={cartItems.length}></Navigation>

      {currentPage === "home" &&(
        <>
        <MyntraBanner />
         <Kitchen onAddToBag={handleAddToBag}></Kitchen>
         </>
         )}
         

      {currentPage === "men" && (
        <>
          <MyntraBanner />
          <Home onAddToBag={handleAddToBag} />
        </>
      )}
      {currentPage === "women" && (
        <>
        <MyntraBanner />
        <Women onAddToBag={handleAddToBag}/>
        </>
      )}
      {currentPage === "bag" && ( 
        <>
        
       <BagItems cartItems={cartItems}  deleteBagItem={deleteBagItem}/>
       </>
      )}
       {currentPage === 'kids' && (
        <>
        <MyntraBanner />
         <Kids onAddToBag={handleAddToBag}></Kids>
         </>
       )}
    </>
  );
}

export default App;
