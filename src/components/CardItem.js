import React from 'react'

const CardItem = props => {
    return (
        <label
            className='card-item'
        >
            <div className="card-radio">
                <input
                    type="radio"
                    name={props.name}
                    className="form-radio text-5"
                    onChange={props.onChange}
                    checked={props.checked}
                />
                <div className="form-icon" />
            </div>

            <div
                className='card-content'
            >
                <div className='card-left-content'>
                    {props.title && (
                        <div
                            className='text-base'
                        >
                            {props.title}
                        </div>
                    )}
                    {props.leftContent}
                </div>

                <div className='card-right-content'>
                    {props.rightContent}
                </div>
            </div>
        </label>
    )
}

export default CardItem
