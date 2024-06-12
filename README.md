# 🧿D&D TodoList🧿

배포 URL : https://kanbanboard-jjleem.web.app
<br>
## 프로젝트 소개

기본적인 TodoList에 Drag&Drop 기능을 추가하여 작업하였습니다.
<br>
## Skill

TypeScript
br
## 라이브러리

### Recoil

* Recoil을 사용하여 상태관리를하였으며, toDoState라는 전역 상태를 사용하여 , 전체에서 할 일 목록의 상태를 쉽게 공유하고 업데이트할 수 있도록 하였습니다.
  
### React-beautiful-dnd

* React-beautiful-dnd를 활용하여 Drag & Drop 기능을 구현하였습니다
  * `DragDropContext`: Drag and Drop 기능을 제공하는 최상위 컨텍스트 컴포넌트입니다.
  * `Droppable`: 항목을 drop할 수 있는 영역을 정의하는 컴포넌트입니다.
  * `Draggable`: 사용자가 Drag할 수 있는 개별 항목을 나타내는 컴포넌트입니다.

### Styled-components

* Styled-components 를 활용해 스타일을 정의하고 반응형을 작업했습니다.

<br> 
## 페이지 구성
* 페이지 구성은 한 페이지로 이루어져있으며, Todo를 생성하는 Input, TO_DO 보드, DOING 보드, DONE 보드 로 이루어져있습니다.

<br>
## 주요 기능
* Input의 text를 통해 Todo가 TO_DO로 생성되어지며 드래그 와 드랍을통해 각 보드에서 상태를 변경할수있습니다. 삭제 기능 또한 가능합니다.

