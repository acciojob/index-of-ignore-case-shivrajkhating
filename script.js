function indexOfIgnoreCase(str, subStr) {
  // Handle edge cases
  if (str == null || subStr == null) return -1;
  if (subStr === "") return 0;
  if (subStr.length > str.length) return -1;

  const lowerStr = str.toLowerCase();
  const lowerSub = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSub);
}
