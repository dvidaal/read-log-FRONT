import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button
      className="text-black bg-transparent cursor-pointer border-none p-0"
      onClick={onClick}
    >
      <img src="plus.png" alt="Añadir" />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
