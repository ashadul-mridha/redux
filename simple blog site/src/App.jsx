import Navbar from './components/Navbar'
import Search from './components/Search'
import Blog from './components/Blog'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
      <Navbar />

      <Search />

      <Blog />

      <Footer />
    </Provider>
  );
}

export default App
