export const includeObject = (obj, includesKeys) => {
  const includedObject = {};
  Object.keys(obj)
    .filter((key) => includesKeys.includes(key))
    .forEach((key) => (includedObject[key] = obj[key] || ""));

  return includedObject;
};
export const areValuesSame = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      return false; // Keys don't match
    }
  }
  return true; // All values match
};
