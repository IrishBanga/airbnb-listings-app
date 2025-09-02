import Card from "react-bootstrap/Card";

export default function PageHeader({ text }) {
  return (
    <>
      <Card>
        <Card.Body>{text}</Card.Body>
      </Card>
      <br />
    </>
  );
}
