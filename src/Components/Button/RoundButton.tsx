import { Button } from "@mui/base";

interface Props {
  children: JSX.Element | string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const RoundButton = ({ children, className, ...rest }: Props) => {
  return (
    <Button
      className={
        "text-center bg-white text-gray-dark w-[50px] h-[50px] rounded-full hover:bg-blue-300 text-[30px] hover:bg-blue-300 " +
        className
      }
      {...rest}
    >
      {children}
    </Button>
  );
};

export default RoundButton;
