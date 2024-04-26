import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { AppContext } from './utils/SidebarContext';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path:'watch',
        element: <WatchVideo />
      }
    ]
  }
])
const App = () => {
  return (
    <AppContext>
      <div className="h-screen">
          <Head />
          <RouterProvider router={appRouter} />
      </div>
    </AppContext>
  );
}

export default App;
