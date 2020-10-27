import { useEffect } from "react";

export default function Link({ onClick, ...props }) {
  useEffect(() => {}, []);

  const handleClick = e => {
    if (/^#/.test(props.href)) {
      e.preventDefault();
      document.querySelector(props.href).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (onClick) onClick(e);
  };

  return <a onClick={handleClick} {...props} />;
}
