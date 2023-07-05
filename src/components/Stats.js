export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Add things to pack for your trip! 🏖️</em>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const percentPacked = Math.round(
    packedItems ? (packedItems / totalItems) * 100 : 0
  );
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "Everything packed! Letsgo! ✈️"
          : `You have ${totalItems} ${
              totalItems === 1 ? "item" : "items"
            } on your
          list, and you have already packed ${packedItems} (
          ${percentPacked}%)`}
      </em>
    </footer>
  );
}
