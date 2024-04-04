import Footer from "@/Components/Footer/Footer";

function Calendar() {
  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  interface CalendarItem {
    day: string;
    date: number;
  }

  let currentMonth: number = new Date().getMonth();
  let currentYear: number = new Date().getFullYear();
  let totalDateOfMonth: number = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();
  let calendarOfMonth: CalendarItem[] = [];

  for (let i: number = 0; i < totalDateOfMonth; i++) {
    calendarOfMonth.push({
      date: i + 1,
      day: daysOfWeek[new Date(currentYear, currentMonth, i + 1).getDay()],
    });
  }

  return (
    <div>
      <h1 className="text-gray-dark">Calendar</h1>
      <div className="max-w-xl mx-auto mt-5">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg text-gray-dark">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {new Date(currentYear, currentMonth).toLocaleString("en-US", {
                month: "long",
              })}
              {currentYear}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  {daysOfWeek.map((day) => (
                    <>
                      <th
                        key={day}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {day}
                      </th>
                    </>
                  ))}
                </tr>
                {Array.from({ length: 6 }, (_, i) => {
                  if (i === 0) {
                    return (
                      <tr key={i}>
                        <td>-</td>
                        {calendarOfMonth
                          .slice(i * 7, i * 7 + 6) //0-7
                          .map((calendarItem) => {
                            return (
                              <td
                                key={calendarItem.date}
                                className="px-6 py-4 whitespace-nowrap"
                              >
                                {calendarItem.date}
                              </td>
                            );
                          })}
                      </tr>
                    );
                  }
                  return (
                    <tr key={i}>
                      {calendarOfMonth
                        .slice(i * 7 - 1, i * 6 + 6 + i)
                        .map((calendarItem) => {
                          return (
                            <td
                              key={calendarItem.date}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {calendarItem.date}
                            </td>
                          );
                        })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Calendar;
