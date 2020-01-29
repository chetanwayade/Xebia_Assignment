import React,  {useState} from 'react'
import Layout from './../components/Layout'

const Planet = props => {
    const [state, setState] = useState(props.location.state.detail)
    return (
        <Layout {...props}>
            <div className="container">
            <label
            className='card-plan'
        >
            <div
                className='card-detail-content'
            >
                <div
                    className='card-border'
                ></div>

                <div className="text-center">
                    <div
                        className='child-first'
                    >
                        Planet Details
                    </div>
                </div>

                <div className="card-population">
                    {state.name}
                </div>
                <div className="p-4">
                    <div className="font-bold">Details</div>

                    <ul>
                        {Object.entries(state).map(detail => (
                            <li
                                key={detail[1]}
                                className='capitalize'
                            >
                            <strong>{detail[0]}-</strong> {detail[1]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </label>
            </div>
        </Layout>
    )
}

export default Planet;