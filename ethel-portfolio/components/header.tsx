type Links = {
  [key: string]: string;
};

const links: Links = {
  "Home": "/",
  "About Me": "/about",
  "My Projects": "/projects",
  "My Achievements": "/achievements",
  "Contact Me": "/contact"
};

export default function Header() {
  return (
    <div className="flex p-4 items-center justify-between ">
      <div className="text-xl ">      
        Ethel's Portfolio 
      </div>
      
    <nav>
      <ul className="flex">
        {Object.entries(links).map(([name, href]) => (
          <li key={name} className=" text-center w-45">
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
    </div>

  );
}
