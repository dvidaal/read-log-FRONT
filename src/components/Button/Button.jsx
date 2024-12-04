const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-white text-black border-1 rounded-md border-gray-300 m-2"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  