
const getDayNames = () => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get today's date
    const today = new Date();
    const todayIndex = today.getDay();
    const todayString = "Today (" + weekday[todayIndex] + ")";
  
    // Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowIndex = tomorrow.getDay();
    const tomorrowString = weekday[tomorrowIndex];
  
    // Get the day after tomorrow's date
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(today.getDate() + 2);
    const dayAfterTomorrowIndex = dayAfterTomorrow.getDay();
    const dayAfterTomorrowString = weekday[dayAfterTomorrowIndex];
  
    return {
      today: todayString,
      tomorrow: tomorrowString,
      dayAfterTomorrow: dayAfterTomorrowString
    };
  };

  export default getDayNames;