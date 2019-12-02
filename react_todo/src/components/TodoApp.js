import React from 'react';

export default class TodoApp extends React.Component{
    render(){
        return(
            <div>
                <header>TODO APP</header>
                <div>
                    <form>
                        <input type="text" placeholder="add todo"/>
                        <button>Add Todo</button>
                    </form>
                </div>
            </div>
        )
    }
}
//export default TodoApp;