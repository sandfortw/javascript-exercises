const findTheOldest = function (people) {
  const ageSorted = people.sort((a, b) => {
    const currentYear = new Date().getFullYear();
    [a, b].forEach(x => "yearOfDeath" in x ? "" : x["yearOfDeath"] = currentYear);
    return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth);
  });
  return ageSorted.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
