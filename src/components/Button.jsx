import PropTypes from 'prop-types';

export default function Button(props) {
  const { bgColor, text, type, onClick } = props;

  const className = `${bgColor} rounded mt-2 text-white font-medium w-full h-7`;

  return (
    // eslint-disable-next-line react/no-unknown-property
    <button bgColor={bgColor} onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}