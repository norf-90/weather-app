const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type dayInfo = {
  dayOfMonth: number;
  dayOfWeek: string;
  month: string;
};

function getDayOfWeek(date: Date): dayInfo {
  const dayIdx = date.getDay();
  const dayOfMonth = date.getDate();
  const monthIdx = date.getMonth();

  return {
    dayOfMonth,
    dayOfWeek: dayNames[dayIdx],
    month: monthNames[monthIdx],
  };
}

export { getDayOfWeek };
