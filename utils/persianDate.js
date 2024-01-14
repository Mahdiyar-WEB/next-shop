const persianDate = (date) => {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    day: "numeric",
    month: "long",
    // weekday: "long",
  });
};

export default persianDate;
