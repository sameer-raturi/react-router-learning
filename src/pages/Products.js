import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Products page</h2>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
