import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../../CityInfo/src'
import Weather from '../../Weather/src'
import { Grid } from '@material-ui/core'

const renderCityAndCountry = cityAndCountry => {
    const { city, country, weather, temp } = cityAndCountry

    return (
        <li key={city}>
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={temp} state={weather}></Weather>
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList