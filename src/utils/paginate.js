exports.paginate = function(array, pageSize = 20) {
  if (pageSize > array.length) return array;
  if (pageSize < 1) return array;
  const chunks = Math.ceil(array.length / pageSize);
  return Array.from(
    { length: chunks },
    (_, i) => i * pageSize,
  )
  .map(start => {
    return array.slice(start, start + pageSize);
  });
}