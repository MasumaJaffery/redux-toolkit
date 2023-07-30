import { Link } from 'react-router-dom';

const Navbar = () => {
 return <div>
  <span className="logo">React-Redux</span>
  <div>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
  </div>
  <span className="cartCount">
    Cart items: 0
  </span>
 </div>;
};
export default Navbar;