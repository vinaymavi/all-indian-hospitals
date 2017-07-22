import React, {Component} from "react"
import {LoadData} from "./HttpService"
import {ReformatData} from "./Utils"
import {Pagination} from "./Pagination"
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
                ["Col1", "Col2", "Col3", "Col4", "Col5"]],
            "total": 100,
            "pagelen": 4,
            "currentPage": 0
        }
    }

    /*TODO do not show component until page ajax response.*/
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        {this.state.header.map((col, index)=> {
                            return <td key={index}>{col}</td>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rows.map((row, index)=> {
                        return (
                            <tr key={index}>
                                {row.map((col, index)=> {
                                    return (
                                        <td key={index}>{col}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Pagination currentPage={this.state.currentPage} loadPageData={this.page} total={this.state.total}
                            pagelen={this.state.pagelen}/>
            </div>
        )
    }

    componentDidMount = ()=> {
        this.fetchResultAndRender(0);
        this.page = this.page.bind(this);
    };

    page(offset) {
        switch (offset) {
            case "next":
                if (this.state.currentPage < this.state.total) {
                    this.state.currentPage++;
                }
                break;
            case "prev":
                if (this.state.currentPage > 0) {
                    this.state.currentPage--;
                }
                break;
            default:
                this.state.currentPage = offset;
        }
        this.fetchResultAndRender(this.state.currentPage * this.state.pagelen);

    }

    fetchResultAndRender(offset) {
        LoadData(offset).then(resp=> {
            return resp.json();
        }).then(json=> {
            let state = ReformatData(json);
            console.log(state);
            this.setState(state);
            this.render();
        });
    }
}
export default Table