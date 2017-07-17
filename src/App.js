import React, {Component} from 'react'
import Header from "./Header"
import Table from "./Table"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Table/>
            </div>
        )
    }
}

export default App