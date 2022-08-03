import AppRouter from "./routers/AppRouter";

import "./styles/base/font-awesome.css";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
