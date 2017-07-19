import React from "react";
export const Pagination = (props)=> {
    const pages = parseInt(props.total / props.pagelen);
    var items = [];
    items.push(<li key='next'><a href="#next"> {"<<"} </a></li>);
    for (let i = 1; i <= pages; i++) {
        items.push(<li key={i}><a href="#">{i}</a></li>);
    }
    items.push(<li key='prev'><a href="#next">{">>"}</a></li>);
    return (
        <ul className="pagination">{items}</ul>
    )
};