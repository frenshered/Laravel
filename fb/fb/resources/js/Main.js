import React from 'react'
import RegisterPage from './pages/RegisterPage.js'
import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import ContactsPage from './pages/ContactsPage.js'
import AboutPage from './pages/AboutPage.js'
import FilmPage from './pages/FilmPage.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            films: [],
            filmsForHomePage: [],
            categories: [],
            about: [],
            isLoading: true,
            isUserLogined: false,
            userName: '',
            selectedFilmData: null,
            selectedCategory: 'Всі фільми',
            openCategoryList: false
        }

        this.updateIsUserLogined = this.updateIsUserLogined.bind(this)
        this.updateSelectedCategory = this.updateSelectedCategory.bind(this)
        this.request = this.request.bind(this)
        this.getSelectedFilmData = this.getSelectedFilmData.bind(this)
    }

    updateIsUserLogined = ( name ) => {
        this.setState({ isUserLogined: !this.state.isUserLogined, userName: name })
    }

    updateSelectedCategory = ( category ) => {
        this.setState({ selectedCategory: category, openCategoryList: !this.state.openCategoryList })
        this.searchDerisedCategory( category )
    }

    updateOpenCategoryList = () => {
        this.setState({ openCategoryList: !this.state.openCategoryList })
    }

    getSelectedFilmData = ( data ) => {
        this.setState({ selectedFilmData: data })
    }

    request = async ( file, statePoint ) => {
        await axios.post( '/api/data', { file: file } )
        .then( ( response ) => {
            if ( statePoint === 'films' )        this.setState({ films: response.data, filmsForHomePage: response.data })
            if ( statePoint === 'categories' )   this.setState({ categories: response.data })
            if ( statePoint === 'about' )        this.setState({ about: response.data })

            return
        })
        .catch( ( e ) => {
            throw new Error( e )
        })
    }

    componentDidMount() {
        (
            async () => {
                await this.request('films.json', 'films')
                await this.request('category.json', 'categories')
                await this.request('aboutData.json', 'about') 
                this.setState({ isLoading: !this.state.isLoading })
            }
        )()   
    }

    searchDerisedCategory = ( category ) => {
        if ( category == 'Всі фільми' ) {
            this.setState({ filmsForHomePage: this.state.films })
        } else {
            let arr = []

            for ( let i = 0; i < this.state.films.length; i++ ) {
                for ( let j = 0; j < this.state.films[i].category.length; j++ ) {
                    if ( this.state.films[i].category[j] == category ) arr.push( this.state.films[i] )
                }
            }

            this.setState({ filmsForHomePage: arr })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" render={ () => 
                            <HomePage data={ this.state } 
                                getSelectedFilmData={ this.getSelectedFilmData } 
                                updateSelectedCategory={ this.updateSelectedCategory }
                                updateOpenCategoryList={ this.updateOpenCategoryList }
                            /> 
                        } 
                        />   
                        <Route exact path="/registration" 
                            render={ () => <RegisterPage updateIsUserLogined={ this.updateIsUserLogined } /> } 
                        />
                        <Route exact path="/login" 
                            render={ () => <LoginPage updateIsUserLogined={ this.updateIsUserLogined } /> } 
                        />
                        <Route exact path="/contacts" component={ ContactsPage } />
                        <Route exact path="/about" render={ () => <AboutPage data={ this.state.about } /> } />
                        <Route exact path={ 
                            this.state.selectedFilmData ? '/' + this.state.selectedFilmData.title.split(' ').join('-') 
                                : 
                            '/film' 
                        } 
                            render={ () => <FilmPage data={ this.state.selectedFilmData } /> } 
                        />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default Main