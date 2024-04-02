import PropTypes from "prop-types";

const Books = ({ children }) => {
  return (
    <div>
      <section className="text-black">{children}</section>
    </div>
  );
};

Books.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Books;
