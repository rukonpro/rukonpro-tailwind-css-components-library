import { Button, Card } from "../components";


export default function HomePage() {
  return (
    <div className="p-10">
      <Card title="This is a Card">
        <p>This is a card component using Tailwind CSS!</p>
        <Button >Click me</Button>
      </Card>
    </div>
  );
}
