import React from 'react';

function star(props) {
    let starIcon = props.isFav ? "https://img.icons8.com/?size=512&id=8uAtuJQJ4jhd&format=png" : "https://img.icons8.com/color/48/star--v1.png"
    return (
        <div>
            <img className="star" onClick={props.handleClick} src={starIcon} alt="star" width="18px" height="18px"/><p className="likecount">{props.like}</p>
        </div>
    );
}

export default star;