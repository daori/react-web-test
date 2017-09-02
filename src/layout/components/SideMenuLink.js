import React from 'react'
import PropTypes from 'prop-types'
import '../menu.css'


class SideMenuLink extends React.Component {
    render() 
    {
        const {id, onLinkClicked, linkText} = this.props
        return (
        
        <a id={id} onClick={e => {
            e.preventDefault()
            onLinkClicked()
        }
        } className="bm-item" href="#" >
            <span>{linkText}</span>
        </a>
        )
    }
}

SideMenuLink.PropTypes = {
    id: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onLinkClicked: PropTypes.func.isRequired
}
export default SideMenuLink