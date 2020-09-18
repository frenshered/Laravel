import React from 'react'
import LinksInHeader from './LinksInHeader.js'
import DropdownFilmsCategory from './DropdownFilmsCategory.js'
import UserBlock from './UserBlock.js'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="logo">Manifest</Link>
                <div className="header__navbar"> 
                    <LinksInHeader />
                    <DropdownFilmsCategory 
                        categories={ this.props.data.categories } 
                        selectedCategory={ this.props.data.selectedCategory } 
                        updateSelectedCategory={ this.props.updateSelectedCategory }
                        openCategoryList={ this.props.data.openCategoryList }
                        updateOpenCategoryList={ this.props.updateOpenCategoryList }
                    />
                </div>
                <UserBlock 
                    isUserLogined={ this.props.data.isUserLogined } 
                    userName={ this.props.data.userName } 
                />
            </header>
        )
    }
}

export default Header