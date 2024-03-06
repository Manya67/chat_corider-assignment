export const convertDate = (date: string) => {
  const day: string = date.substr(8, 2);
  const year: string = date.substr(0, 4);
  let month: string = "";
  switch (date.substr(5, 2)) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sept";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  return day + " " + month + ", " + year;
};
