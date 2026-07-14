import NavItem from "@/components/navigation/NavItem";
import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav
      aria-label="主要導覽"
      className="hidden items-center gap-6 lg:flex"
    >
      {navigation.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
        />
      ))}
    </nav>
  );
}