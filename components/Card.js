export default function Card({ title, children }) {
    return (
      <div className="border rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    )
  }
  