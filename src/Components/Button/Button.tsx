import { ButtonContainer } from "./ButtonStyle";


interface buttonProps{
  label:string;

}

export default function Button({label}:buttonProps) {
  return (
    <ButtonContainer>{label}</ButtonContainer>
  )
}
