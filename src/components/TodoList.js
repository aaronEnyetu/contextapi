import React from 'react'


class TodoList extends React.Component {
    render() {
        return (
            <div className='ui list'>
                <p className='item'>Plan for trip</p>
                <p className='item'> Go fishing</p>
                <p className='item'>Listen to music</p>
            </div>
        )
    }
}

export default TodoList