import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
interface IDraggableCardProps {
  todo: string;
  index: number;
}

const DraggableCard = ({ todo, index }: IDraggableCardProps) => {
  console.log(todo, "has been redered");
  const [toDo, setToDo] = useRecoilState(toDoState);
  const handleDelete = (index: number, status: "to_do" | "doing" | "done") => {
    setToDo((prev) => ({
      ...prev,
      [status]: prev[status].filter((_, i) => i !== index),
    }));
  };

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
          {toDo.to_do.includes(todo) && (
            <button onClick={() => handleDelete(index, "to_do")}>삭제</button>
          )}
          {toDo.doing.includes(todo) && (
            <button onClick={() => handleDelete(index, "doing")}>삭제</button>
          )}
          {toDo.done.includes(todo) && (
            <button onClick={() => handleDelete(index, "done")}>삭제</button>
          )}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;
