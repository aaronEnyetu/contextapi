import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


class TodoList extends React.Component {
    static contextType = ThemeContext
    render() {
        const { isDarkTheme, lightTheme, darkTheme } = this.context
        const theme = isDarkTheme ? darkTheme : lightTheme

        return (
            <div style={{background: theme.background, color: theme.text, height:'140px', textAlign: 'center' }} >
                <p className='item'>Plan for trip</p>
                <p className='item'> Go fishing</p>
                <p className='item'>Listen to music</p>
            </div>
        )
    }
}

export default TodoList