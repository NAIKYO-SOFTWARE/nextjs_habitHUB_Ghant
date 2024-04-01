interface Props {
  className?: string;
  name: string;
  value: string;
  id?: string;
}

const RadioButton = ({ name, value, ...rest }: Props) => {
  return <input type="radio" name={name} value={value} {...rest} />;
};

export default RadioButton;
