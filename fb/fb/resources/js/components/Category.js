import React from 'react'

class Category extends React.Component {
    render() {
        return (
            <span className="category" onClick={ () => this.props.updateSelectedCategory( this.props.value ) }>
                { this.props.value }
            </span>
        )
    }
}

export default Category