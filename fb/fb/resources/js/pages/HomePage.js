import React from 'react'
import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import Preloader from '../components/Preloader.js'

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.isLoading ? <Preloader /> :
                    <div className="container">
                        <Header 
                            data={{ 
                                categories: this.props.data.categories, 
                                isUserLogined: this.props.data.isUserLogined,
                                userName: this.props.data.userName,
                                selectedCategory: this.props.data.selectedCategory,
                                openCategoryList: this.props.data.openCategoryList
                            }} 
                            updateOpenCategoryList={ this.props.updateOpenCategoryList }
                            updateSelectedCategory={ this.props.updateSelectedCategory } 
                        /> 
                        <Main getSelectedFilmData={ this.props.getSelectedFilmData } 
                            data={ this.props.data.filmsForHomePage || this.props.data.films }
                        />  
                        <Footer />
                    </div>
                }
            </React.Fragment>   
        )
    }
}

export default HomePage