// import { CookiesProvider } from "react-cookie";
import "./App.css";
import MainComponent from "./BankApp/MainComponent";
// import SPAComponent from './Components/SPAComponent';
// import SPAComponent2 from './Components/SPAComponent2';
// import IShopIndexComponent from "./IShop/IShopIndexComponent";
// import ShoppingIndex from './Routing/ShoppingIndex';
// import AxiosDemo from './Components/AxiosDemo';
// import JqueryAjaxDemo from './Components/JqueryAjaxDemo';

function App() {
  return (
    // <div className="App">
    //   {/* <JqueryAjaxDemo/> */}
    //   {/* <AxiosDemo/> */}
    //   {/* <ShoppingIndex/> */}
    //   {/* <SPAComponent /> */}
    //   {/* <SPAComponent2/> */}
    //   <CookiesProvider>
    //     <IShopIndexComponent />
    //   </CookiesProvider>
    // </div>
    <div>
      {/* <CookiesProvider>
        <IShopIndexComponent />
      </CookiesProvider> */}
      <MainComponent/>
    </div>
  );
}

export default App;
