export default function Title({ title }) {
  const [first, second] = title.split(" ");
  return (
    <div className="section-title">
      <h2>
        {first + " "}
        <span>{second}</span>
      </h2>
    </div>
  );
}
