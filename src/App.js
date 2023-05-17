import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <Body/>
    {/*
      * Head
      * Body
      *   Sidebar
      *     MenuItems
      *   MainContainer
      *      ButtonList
      *      VideoContainer
      *        VideoCard
      */}

    </div>
    </Provider>
  );
}

export default App;
