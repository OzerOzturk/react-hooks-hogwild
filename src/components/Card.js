import React, { useState } from "react";
import { Card, Button, Image } from "semantic-ui-react";

function HogCard({ hog }) {
  const [visible, setVisible] = useState(false);

  
  function handleChangeVisibilty(e) {
    e.preventDefault();
    setVisible(!visible);
  }

  return (
    <Card>
      <Image src={hog.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Card.Description>
          {visible === true ? <HogSpecialities hog={hog} /> : ""}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleChangeVisibilty}>Show Details</Button>
      </Card.Content>
    </Card>
  );
}
export function HogSpecialities({ hog }) {
  return <div>{hog.specialty}</div>;
}

export default HogCard;
