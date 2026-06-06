export default function DesktopMenu() {
  const links = ["Home", "Cakes", "About", "Contact"];

  return (
    <ul className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="transition-colors hover:text-pink-500"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}