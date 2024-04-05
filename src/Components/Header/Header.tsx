import Calendar from "../Calendar/Calendar";

function Header() {
  let date = new Date();
  let startOfWeek = new Date(date);
  let endOfWeek = new Date();
  startOfWeek.setDate(date.getDate() - date.getDay());
  if (date.getMonth() > startOfWeek.getMonth()) {
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setMonth(date.getMonth());
  } else {
    endOfWeek.setDate(startOfWeek.getDate() + 6);
  }
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let cal = [];
  while (startOfWeek < endOfWeek) {
    cal.push(new Date(startOfWeek));
    startOfWeek.setDate(startOfWeek.getDate() + 1);
  }
  return (
    <div className="flex mb-auto absolute justify-around left-1/2 transform -translate-x-1/2 w-3/5">
      {cal.map((date) => (
        <Calendar
          date={date.getDate()}
          day={daysOfWeek[date.getDay()]}
          key={date.getTime()}
        />
      ))}
    </div>
  );
}

export default Header;
