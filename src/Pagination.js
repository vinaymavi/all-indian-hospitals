import React from "react";
export const Pagination = (props)=> {
    const clickHandler = (e, i)=> {
        /*TODO synthetic event. */
        e.preventDefault();
        props.loadPageData(i);
    };
    /*TODO mark current page disabled*/
    const pages = parseInt(props.total / props.pagelen);
    var items = [];
    items.push(<li key='prev' onClick={(e)=> {
        clickHandler(e, "prev")
    }}><a href="#prev">{"<<"}</a></li>);
    for (let i = 0; i < 4; i++) {
        if (i === props.currentPage) {
            items.push(<li key={i}>{i + 1}</li>);
        } else {
            items.push(<li onClick={(e)=> {
                clickHandler(e, i)
            }} key={i}>
                <a href="#">{i + 1}</a>
            </li>);
        }

    }
    if (pages > 8) {
        items.push(<li key='dotdot'>....</li>);
    }
    for (let i = pages - 3; i <= pages; i++) {
        if (i === props.currentPage) {
            items.push(<li key={i}>{i + 1}</li>);
        } else {
            items.push(<li onClick={(e)=> {
                clickHandler(e, i)
            }} key={i}>
                <a href="#">{i + 1}</a>
            </li>);
        }
    }
    items.push(<li key='next' onClick={(e)=> {
        clickHandler(e, "next")
    }}><a href="#next">{">>"}</a></li>);
    return (
        <ul className="pagination">{items}</ul>
    )
};

Pagination.propTypes = {
    'total': React.PropTypes.number,
    'pageLen': React.PropTypes.number,
    'loadPageData': React.PropTypes.func,
    'currentPage': React.PropTypes.number
};