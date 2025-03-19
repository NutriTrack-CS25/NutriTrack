const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2 font-semibold rounded-lg transition-all duration-200 shadow-md cursor-pointer";

  const variants = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-[#F6FBE9] text-black hover:bg-[#E1F3C0]",
    outline: "border-1 border-black text-green-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
