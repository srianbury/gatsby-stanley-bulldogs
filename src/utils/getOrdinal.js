function getOrdinal(num) {
  const j = num % 10;
  const k = num % 100;

  if (k === 1 && k !== 11) {
    return `${num}st`;
  }

  if (j === 2 && k !== 12) {
    return `${num}nd`;
  }

  if (j === 3 && k !== 13) {
    return `${num}rd`;
  }

  return `${num}th`;
}

export { getOrdinal };
