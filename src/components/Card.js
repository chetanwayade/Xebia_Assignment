import React, { useState } from 'react'

const Card = props => {
    const [checkedItem, setCheckedItem] = useState(null)

    const handleChange = idx => () => {
        setCheckedItem(checkedItem == idx ? null : idx)
        props.onChange(idx)
    }

    const renderChildren = () => {
        return React.Children.map(props.children, (child, idx) => {
            return React.cloneElement(child, {
                key: idx,
                onChange: handleChange(idx),
                defaultChecked: checkedItem === idx,
                isActive: checkedItem === idx,
                name: `radio-item`,
            })
        })
    }

    return <div className="card-group">{renderChildren()}</div>
}

export default Card
