
const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id); 
    }
    return (
    <div>
        {todos.map(todo => {
            return (
                <div key={todo.id}>
                    <button onClick={() => complete(todo.id)}>지우기</button>
                    <span>{todo.content}</span>
                </div>
            )
        })}
    
    
    
    </div>);
}

export default List;
