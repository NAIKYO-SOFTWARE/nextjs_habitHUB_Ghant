import "../../style/components/todoSuggest.css";

interface TodoSuggest {
  content: string;
  icon: string;
  background: string;
}

function TodoSuggest({ content, icon, background }: TodoSuggest) {
  return (
    <>
      <div className="div" style={{ backgroundColor: background }}>
        <div className="div-2">
          <div className="div-3">{icon}</div>
          <div className="div-4">{content}</div>
        </div>
      </div>
    </>
  );
}

export default TodoSuggest;
