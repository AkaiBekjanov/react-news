export const formatDate=(date)=>{
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    return date.toLocaleDateString("en-US",options);
}