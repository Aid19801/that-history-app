import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './constants';

class HomePage extends Component {

    componentDidMount = () => {
      this.props.pageLoaded();
    }
    
    render() {
        return (
            <View>
                <Text>i am homepage</Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    isLoading: state.homePage.isLoading,
})

const mapDispatchToProps = dispatch => ({
    pageLoaded: () => dispatch({ type: actions.HOME_LOADED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
