import React,{ Component } from 'react'
import './Cell.css'

const Rows = 50;
const Columns = 256;

class Cell extends Component {
    createTable () {
        let column = []
        for (let i = 0; i < Columns; i++) {
          let row = []
          for (let j = 0; j < Rows; j++) {
            row.push(<td className='td'><input type='text' name='cell'></input></td>)
          }
          column.push(<tr className='tr'>{row}</tr>)
        }
        return column
    }
    
    render () {
        return (
          <table className='cells'>
              <tbody>
              {this.createTable()}
              </tbody>
          </table>
        )
    }
}

export default Cell;