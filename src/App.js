import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer'

// when we wroute to watch page, sidenav and header stays.only main container should change
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, //this and its sibling routes will load wherever <RouterProvider> is put
    children: [ // Children will laod where we put <outlet>
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} /> {/* here components change based on approuter*/}
      </div>
    </Provider>
  );
}

export default App;

/*
Header
Body
    SideNav
    MainContainer
        Buttons List
        VideoContainer
            VideoCards
*/