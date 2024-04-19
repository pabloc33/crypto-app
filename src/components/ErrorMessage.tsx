import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: Props) => {
  return <div>{children}</div>;
};
