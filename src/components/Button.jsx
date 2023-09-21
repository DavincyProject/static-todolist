import PropTypes from "prop-types";

export default function Button(props) {
  const { bgColor, text, type, onClick } = props;

  const className = `${bgColor === undefined ? "bg-btn-default" : bgColor
    } rounded mt-2 text-white font-medium w-full h-7`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
