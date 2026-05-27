import type { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./ButtonStyle";

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
