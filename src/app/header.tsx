import { ModeToggle } from "@/components/modo-toggle";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className=" border-b bg-[#f2f2f2] flex items-center justify-between container min-h-[60px]">
      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default Header;
