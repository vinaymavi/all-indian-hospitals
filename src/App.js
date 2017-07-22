import React, {Component} from 'react'
import Header from "./Header"
import Table from "./Table"
import {Pagination} from "./Pagination"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Table/>
                <Pagination total={100} pagelen={10}/>
            </div>
        )
    }
}
export default App