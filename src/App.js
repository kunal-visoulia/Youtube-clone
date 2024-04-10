import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
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
        <RouterProvider router={appRouter} />
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