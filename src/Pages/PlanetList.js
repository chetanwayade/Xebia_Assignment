import React, {useState, useEffect} from 'react'
import Layout from './../components/Layout'
import Card from './../components/Card'
import CardItem from './../components/CardItem'
import './../css/planet.css'
const axios = require('axios');

const PlanetList = (props) => {
    const [hasResults, setHasResults] = useState(false)
    const [filterPlanetList, setFilterPlanetList] = useState([]);
    const [planetList, setPlanetList]= useState([]);
    
    const handleChange = (event) => {
        let value = event.target.value.toLocaleLowerCase();
        let update;
        if (value) {
            update = planetList.filter(item => {
                return item.name.toLocaleLowerCase().includes(value)
            })
        } else {
            update = [];
        }
        setFilterPlanetList(update);
    }

    useEffect(() => {
        axios.get('https://swapi.co/api/planets')
        .then(data => {
            setPlanetList(data.data.results);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
        if (filterPlanetList.length) {
            setHasResults(true)
        } else {
            setHasResults(false)
        }
    }, [filterPlanetList]);

    const selectedPlanet = (idx) => {
        console.log(filterPlanetList[idx])
        props.history.push({
            pathname: '/planet',
            state: { detail: filterPlanetList[idx] }
        })
    }
    
    return (
        <Layout {...props}>
        <div className="container">
            <h3 className="h3">Search a Planet</h3>
            <input 
                type="text" 
                className='input-text' 
                name="planet" 
                placeholder="Search planets" 
                onChange={handleChange}
            />
            { hasResults ? 
            (
            <div className='col-12'>
                <p className="search-result"></p>
                <Card onChange={selectedPlanet}>
                    {filterPlanetList.map((item, idx) => {
                            return (
                                <CardItem
                                    key={idx}
                                    title={item.name}
                                    leftContent={
                                        <p>
                                            {item.terrain},
                                            {item.climate}
                                        </p>
                                    }
                                    rightContent={
                                        <p className={item.population.toString().length > 10 && item.population !== 'unknown' ? 'largest' : `${
                                            item.population.toString().length > 5  && item.population !== 'unknown' ? 'larger' : 'smaller'
                                        }`}>
                                            <span>
                                                &nbsp;
                                            </span>
                                            {item.population}
                                        </p>
                                    }
                                />
                            )
                        })}
                </Card>
            </div>
           ) 
        : (
            <div className="text-center my-16">
                <strong>No Results Found</strong>
            </div>
          )}
        </div>
        </Layout>
    )
}

export default PlanetList;