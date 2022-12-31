import './App.css';

import {
  Navbar,
  Header,
  About,
  FeaturesOne,
  FeaturesTwo,
  GetStarted,
  Gallery,
  Contact,
  Footer
} from "./components";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <About />
    <FeaturesOne />
    <FeaturesTwo />
    <GetStarted />
    <Gallery />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
