import NavLink from "./NavLink";

// Define the type for the link objects
interface Link {
    path: string;
    title: string;
  }
  
  // Define the props for the component
  interface MenuOverlayProps {
    links: Link[];
  }
  
  const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default MenuOverlay;
  