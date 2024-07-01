import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre Nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 3,
    name: "Mi Cuenta",
    link: "#",
  },
  {
    id: 4,
    name: "Politica de Privacidad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            Cafeteria
            <span className="font-bold">E-commerce</span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((dato) => (
              <li key={dato.id}>
                <Link
                  href={dato.link}
                  className="hover:underline me-4 md:me-6 "
                >
                  {dato.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024 <Link href="#">Cafeteria Web.</Link> Todos los derechos
          reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
