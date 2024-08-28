function Button({ children, onClick, disabled }) {
  return (
    <button
      className="rounded bg-gray-800 text-white px-2 py-1"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
