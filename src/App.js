import MobileOrderPage from "./pages/MobileOrderPage";
import OrderPage from "./pages/OrderPage";
import LeftSideBar from "./pages/navigation/LeftSideBar";
import MobileNavBar from "./pages/navigation/MobileNavBar";
import TopNavBar from "./pages/navigation/TopNavBar";

const App = ()=> {
  return (
    <div>
      <LeftSideBar/>
      <TopNavBar/>
      <OrderPage/>
      <MobileOrderPage/>
      <MobileNavBar/>
    </div>
  );
}

export default App;
