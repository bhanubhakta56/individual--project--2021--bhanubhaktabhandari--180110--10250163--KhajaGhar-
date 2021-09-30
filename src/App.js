import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCheckSquare, faCoffee, faPencilAlt, faSearch, faSignOutAlt, faStar, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faSearch, faStar, faUser, faSignOutAlt, faPencilAlt, faTrash, faBell)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
