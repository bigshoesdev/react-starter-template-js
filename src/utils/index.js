export function isEmptyString(value) {
  return (
    !value ||
    typeof value !== "string" ||
    value.split(" ").join("").length === 0
  );
}

export function isEmptyArray(value) {
  return !value || value.length === 0;
}

export function cloneObject(value) {
  if (value == null) {
    return value;
  }

  return JSON.parse(JSON.stringify(value));
}
