import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Carly<span className="text-emerald-600 ">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className=" capitalize text-lg tracking-wide hover:text-emerald-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
