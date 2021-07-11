import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { WiCloud, WiDayCloudy, WiDaySunny, WiFog, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const renderState = state => {
    let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName['sunny'];
    return <Icon/>;
}

const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider value={{size:'5em'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display='inline' variant='h3'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}

export default Weather
