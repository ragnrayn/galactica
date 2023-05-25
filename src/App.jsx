import Menu from './components/menu/Menu'
import Header from './components/header/Header';
import "./App.css";
import Level from './components/level/Level';
import SpaceLevels from './components/spaceLevels/SpaceLevels';
import Achievement from './components/Achievement/Achievement';

function App() {

  return (
    <>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <div className="content-header">
            <Header />
          </div>
          <main>
            <div className="main-left">
              <Level />
            </div>
            <div className="main-right">
              <div className="space-levels">
                <SpaceLevels />
              </div>
              <div className="achievement">
                <Achievement />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
