import React from 'react'
require("icons/tags.svg");
require("icons/count.svg");
require("icons/money.svg");
require("icons/close.svg");

type Props = {
    name: string
}

function Icon(props: Props) {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon