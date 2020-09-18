import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

class Preloader extends React.Component {
    render() {
        return (
            <div className="preloader__container">
                <div className="preloader__block">
                    <span className="preloader">
                        <CircularProgress color="secondary" size="100px" thickness={ 8 } disableShrink={ true } />
                    </span>
                    <span className="preloader pre1">
                        <CircularProgress color="primary" size="60px" thickness={ 6 } />
                    </span>
                    <span className="preloader">
                        <CircularProgress color="inherit" size="40px" thickness={ 5 } disableShrink={ true } />
                    </span>
                    <span className="preloader pre2">
                        <CircularProgress color="inherit" size="20px" thickness={ 4 } />
                    </span>
                </div>
            </div> 
        )
    }
}

export default Preloader