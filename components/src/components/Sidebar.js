import Link from "./Link";

function SideBar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start ml-4">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
