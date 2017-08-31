import React from 'react';
import { connect } from 'react-redux'
  
let TabContent = ({value, onClick}) => {
    console.log("WAITIT " + value)
    return (
        <div>
            <h2>{value}</h2>
            <div onClick={onClick}>Change</div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("ULULUL " + state.testong)
    return {
      value: state.testong
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onClick: id => {
        dispatch(changeText(makeid()))
      }
    }
}

const changeText = value => {
    return {
      type: 'CHANGE_ACTIVE_PAGE',
      value
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var maxLength = 5 + Math.floor(Math.random() * 15);
    
    for (var i = 0; i < maxLength; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

TabContent = connect(mapStateToProps, mapDispatchToProps)(TabContent)

export default TabContent