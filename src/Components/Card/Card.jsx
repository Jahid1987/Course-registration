import PropTypes from "prop-types";

const Card = ({ course, handleSetCartItems }) => {
  const { cover, title, price, description, credit } = course;
  return (
    <div className=" card card-compact max-w-72 bg-base-100 shadow-xl rounded-lg">
      <figure className=" mt-1">
        <img src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className=" text-gray-600">{description}</p>
        <div className="flex justify-between items-center w-full">
          <p className=" text-gray-600">Price: {price}</p>
          <p className=" text-gray-600">Credit: {credit}</p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSetCartItems(course)}
            className="btn bg-[#2F80ED] text-white w-full"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  course: PropTypes.object.isRequired,
  handleSetCartItems: PropTypes.func.isRequired,
};
export default Card;
