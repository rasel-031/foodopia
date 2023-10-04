import OrderPage from "./pages/OrderPage";
import LeftSideBar from "./pages/navigation/LeftSideBar";
import TopNavBar from "./pages/navigation/TopNavBar";

const App = ()=> {
  return (
    <div>
      <LeftSideBar/>
      <TopNavBar/>
      <OrderPage/>
    </div>
  );
}

export default App;
