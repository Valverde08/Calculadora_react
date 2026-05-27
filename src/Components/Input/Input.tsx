import type { HtmlHTMLAttributes } from "react";
import { InputContainer } from "./InputStyle";

export default function Input({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <InputContainer {...props}>
      <div>{children}</div>
    </InputContainer>
  );
}
