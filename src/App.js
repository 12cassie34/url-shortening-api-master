import Header from './components/Header'
import Welcome from './components/Welcome'
// import ShortenInput from './components/ShortenInput'
import Features from './components/Features'

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <Welcome />
      {/* <div className='relative'> */}
        {/* <ShortenInput /> */}
        <Features />
      {/* </div> */}
    </div>
  );
}

export default App
