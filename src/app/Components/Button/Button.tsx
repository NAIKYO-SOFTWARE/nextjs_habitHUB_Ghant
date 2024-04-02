import "../../style/components/button.css";

interface Button {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: Button) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
