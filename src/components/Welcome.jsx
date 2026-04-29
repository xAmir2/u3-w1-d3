import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Alert
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
      className="d-flex justify-content-center m-0"
    >
      <Alert.Heading>
        Welcome to the Library of Doom, pick your poison!
      </Alert.Heading>
    </Alert>
  );
}

export default Welcome;
