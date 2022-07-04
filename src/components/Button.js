function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="button bg-main-color text-white fw-7 fs-16-lh-20"
    >
      {text}
    </button>
  );
}

export default Button;
