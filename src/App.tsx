import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

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
  const [toDo, setToDo] = useRecoilState(toDoState);
  const [inputValue, setInputValue] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      setWarningMessage("값을 입력해주세요.");
    } else {
      setToDo((prev) => ({
        ...prev,
        to_do: [...prev.to_do, inputValue],
      }));
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (warningMessage) setWarningMessage("");
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Circle>🌏</Circle>
      <CircleTwo>🌏</CircleTwo>
      <Wrapper>
        <Title>🌏TodoList Drag&Drop🌏</Title>
        <SubTitle>To_DO를 생성하고 마우스로 Drag & Drop을 해보세요 !</SubTitle>
        <FormWrapper>
          <FormStyle onSubmit={onSubmit}>
            <InputStlye
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="새로운 할 일을 입력하세요"
            />
            <BTnStyle type="submit">Add To Do</BTnStyle>
          </FormStyle>
          {warningMessage && <Error>{warningMessage}</Error>}
        </FormWrapper>
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
  width: 100vw;
  height: 100vh;
  max-width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 50px;
`;
const FormWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FormStyle = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStlye = styled.input`
  width: 50%;
  height: 100%;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
`;
const BTnStyle = styled.button`
  height: 100%;
  margin-left: 5px;
  border-radius: 5px;
  padding: 10px;
`;
const Error = styled.p`
  text-align: center;
  color: red;
  font-weight: bold;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 21px;
  margin-bottom: 20px;
`;
const Circle = styled.div`
  position: absolute;
  font-size: 800px;
  z-index: -1;
  transform: rotate(90deg);
  opacity: 0.5;
  bottom: -250px;
  right: -400px;
`;
const CircleTwo = styled.div`
  position: absolute;
  font-size: 800px;
  z-index: -1;
  transform: rotate(90deg);
  opacity: 0.5;
  top: -250px;
  left: -400px;
`;
