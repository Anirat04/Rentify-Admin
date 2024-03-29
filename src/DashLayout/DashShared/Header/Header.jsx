//component added by "Fahima"

const Header = ({ heading, title }) => {
  return (
    <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 mx-3 md:mx-0 space-y-2">
      <h1 className="font-bold text-xl text-[#002172] capitalize">{heading}</h1>
      <p className="text-xs font-medium">
        Dashboard / <span className="text-[#ec3323]">{title}</span>
      </p>
    </div>
  );
};

export default Header;
