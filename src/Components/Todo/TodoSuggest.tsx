interface TodoSuggest {
  title: string;
  icon: string;
  background: string;
}

function TodoSuggest({ title, icon, background }: TodoSuggest) {
  return (
    <>
      <div
        className="rounded-xl flex w-[500px] gap-[20px] text-[#000] font-normal whitespace-nowrap justify-between px-[16px] py-[18px] m-[5px]iv"
        style={{ backgroundColor: background }}
      >
        <div className="flex gap-[8px]">
          <div className="tracking-[-0.24px] [font:24px/83%_Material_Icons,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
            {icon}
          </div>
          <div className="mx-[0] my-[auto] [font:14px_Poppins,_sans-serif]">
            <span>{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoSuggest;
