const ButtonPrimary = ({ children }) => {
  return (
    <button className=" inline capitalize bg-red-500 rounded-md p-1 py-4 px-6">
      {children}
    </button>
  );
};

export default ButtonPrimary;
