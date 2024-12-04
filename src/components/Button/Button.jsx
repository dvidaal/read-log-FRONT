const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="custom"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  