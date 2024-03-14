import PropTypes from "prop-types";

const Cart = ({ cartItems }) => {
  return (
    <div className=" bg-white p-5 rounded-lg w-2/5 ">
      <h3 className=" text-blue-500 text-2xl font-bold">
        Credit Hour Remaining {}
      </h3>
      <div className="divider"></div>
      <h3 className=" text-2xl font-bold">Course Names:</h3>
      <ol>
        {cartItems.map((item, index) => (
          <li className=" mt-5 text-gray-600" key={index}>
            {item.title}
          </li>
        ))}
      </ol>
      <div className="divider"></div>
      <h3 className=" text-lg font-semibold">
        Total Credit Hour: {cartItems.reduce((a, b) => a + b.credit, 0)}
      </h3>
      <div className="divider"></div>
      <h3 className="text-lg font-bold">
        Total Price: {cartItems.reduce((a, b) => a + b.price, 0)}
      </h3>
    </div>
  );
};
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
export default Cart;
