interface Props {
  type: "text" | "password";
  id?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

const Input = ({ type, className, ...rest }: Props) => {
  return (
    <div>
      <input
        type={type}
        className={`border-none h-[45px] w-[450px] bg-[aliceblue] text-[black] pl-[5px] rounded-lg ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
