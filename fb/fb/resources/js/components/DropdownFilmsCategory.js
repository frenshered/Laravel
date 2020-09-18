import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import Category from './Category.js'

class DropdownFilmsCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openCategoryList: false
        }
    } 

    render() {
        return (
            <div className="dropdown">
                <button className="dropdown__button"
                    onClick={ this.props.updateOpenCategoryList }
                >
                    <span className="dropdown__button__text">{ this.props.selectedCategory }</span>
                    {
                        this.props.openCategoryList ? 
                            <ArrowDropUpIcon color="primary" fontSize="small" /> 
                        :   <ArrowDropDownIcon color="primary" fontSize="small" />
                    }
                </button>
                {
                    this.props.openCategoryList ? 
                        <div className="dropdown__list">
                            {
                                this.props.categories.map( ( category, index ) => {
                                    return (
                                        <Category key={ index } value={ category.category } updateSelectedCategory={ this.props.updateSelectedCategory } />
                                    )
                                })
                            }
                        </div> : ''
                }
            </div>
        )
    }
}

export default DropdownFilmsCategory