import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import AddCategory from './pages/admin/category/AddCategory';
import CategoryPage from './pages/admin/category/CategoryPage';
import EditCategory from './pages/admin/category/EditCategory';
import HomePage from './pages/HomePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <ToastContainer />
        <Route path='/' component={HomePage} exact />
        <Route path='/admin/categories' component={CategoryPage} exact />
        <Route path='/category/new' component={AddCategory} exact />
        <Route path='/admin/category/:id' component={EditCategory} exact />
      </main>
    </Router>
  );
}

export default App;
