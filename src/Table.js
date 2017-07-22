import React, {Component} from "react"
import {LoadData} from "./HttpService"
import {ReformatData} from "./Utils"
class Table extends Component {
    constructor() {
        super();
        this.state = {
            "header": ["Col1", "Col2", "Col3", "Col4", "Col5"],
            "rows": [["Col1", "Col2", "Col3", "Col4", "Col5"],
                ["Col1", "Col2", "Col3", "Col4", "Col5"],
                ["Col1", "Col2", "Col3", "Col4", "Col5"],
                ["Col1", "Col2", "Col3", "Col4", "Col5"],
                ["Col1", "Col2", "Col3", "Col4", "Col5"],
                ["Col1", "Col2", "Col3", "Col4", "Col5"]]
        }
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    {this.state.header.map((col, index)=> {
                        return <td key={index}>{col}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                {this.state.rows.map((row,index)=> {
                    return (
                        <tr key={index}>
                            {row.map((col,index)=>{
                                return(
                                    <td key={index}>{col}</td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    componentDidMount = ()=>{
        LoadData().then(resp=>{
            return resp.json();
        }).then(json=>{
             let state  = ReformatData(json);
             console.log(state);
             this.setState(state);
             this.render();
        });
    };
}
export default Table