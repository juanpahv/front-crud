export const formatDate = (date: string | number): string => {
  if (!date) return ""; 
  const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, 
  }).replace(",", ""); 
  
  return formattedDate;
};
