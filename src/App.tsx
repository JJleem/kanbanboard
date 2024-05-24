import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const onDragEnd = ({ source, destination, draggableId }: DropResult) => {
  //   if (!destination) return;
  //   setToDos((oldToDos) => {
  //     const copyToDos = [...oldToDos];
  //     copyToDos.splice(source.index, 1);
  //     copyToDos.splice(destination.index, 0, draggableId);
  //     return copyToDos;
  //   });
  // };
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (destination?.droppableId === source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const destinationBoard = [...oldToDos[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
