import type { ReactNode } from "react"; // typeをつけるのは「型のみのimport」を明示するため

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
