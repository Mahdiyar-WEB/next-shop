export const includeObject = (obj, includesKeys) => {
  const includedObject = {};
  Object.keys(obj)
  .filter((key) => includesKeys.includes(key))
  .forEach((key) => (includedObject[key] = obj[key]));
  
  return includedObject;
};
