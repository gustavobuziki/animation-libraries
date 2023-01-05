import { Link as Li } from "react-router-dom";

import "./link.css";

interface LinkProps {
  link: string;
}

export const Link = ({ link }: LinkProps) => {
  return (
    <button className="link">
      <Li to={link}>Próxima animação</Li>
    </button>
  );
};
