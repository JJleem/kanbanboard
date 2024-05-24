import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableCardProps {
  todo: string;
  index: number;
}

const DraggableCard = ({ todo, index }: IDraggableCardProps) => {
  console.log(todo, "has been redered");
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <span>😎</span>
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: #000;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;
