import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { AppContext } from './utils/SidebarContext';
const App = () => {
  return (
    <AppContext>
      <div className="h-screen">
          <Head />
          <Body />
      </div>
    </AppContext>
  );
}

export default App;
