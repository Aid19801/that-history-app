import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as actions from './constants';

class HomePage extends Component {

    componentWillMount = () => {
        this.props.pageLoading();
    }

    componentDidMount = () => {
      this.props.pageLoaded();
    }
    
    render() {

        if (this.props.isLoading) {
            console.log('loading...')
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        console.log('loaded!');
        return (
            <View>
                <Text>i am homepage</Text>

                <View style={{ borderWidth: 4, borderColor: 'red', height: '80%' }}>
                    
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{flex: 1}}
                        region={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                        }}
                        showsUserLocation={true}
                    />
                </View>

            </View>
        )
    }
}


const mapStateToProps = state => ({
    isLoading: state.homePage.isLoading,
})

const mapDispatchToProps = dispatch => ({
    pageLoading: () => dispatch({ type: actions.HOME_LOADING }),
    pageLoaded: () => dispatch({ type: actions.HOME_LOADED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
