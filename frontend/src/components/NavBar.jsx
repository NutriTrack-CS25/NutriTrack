import Button from "./Button";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-[#E8F5E9] h-24 px-12 w-full shadow-md z-50">
      {/* Logo */}
      <a href="#">
        <img
          className="rounded-full w-20 h-20"
          alt="NutriTrack logo"
          src="/assets/logo/logo.png"
        />
      </a>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <NavList text={"How it works"} />
          <NavList text={"Features"} />
          <NavList text={"Testimonials"} />
          <li>
            <Button
              className="w-full"
              text="Sign Up"
              onClick={() => console.log("Sign Up Clicked")}
            />
          </li>
          <li>
            <Button
              className="w-full"
              variant="secondary"
              text="Log In"
              onClick={() => console.log("Log In Clicked")}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
