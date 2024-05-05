import { ModeToggle } from "@/components/modo-toggle";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className=" border-b bg-[#f2f2f2] flex items-center justify-between container min-h-[60px]">
      <ModeToggle />
      <div className="flex items-center space-x-2">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
