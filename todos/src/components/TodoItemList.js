import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

  // 컴포넌트 라이프 사이클 메소드중 shouldComponentUpdate 는 컴포넌트가 리렌더링을 할 지 말지 정해줍니다. 그리고 값이 다를때만 리렌더링하게 설정하면 끝난다.
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }


  render() {
    const {todos, onToggle, onRemove } = this.props;
    
    const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;