import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as actions from './constants';
import {markers} from '../../lib/mock-markers';


class HomePage extends Component {

    componentWillMount = () => {
        this.props.pageLoading();
    }

    componentDidMount = () => {
      this.props.pageLoaded();
    }
    
    render() {

        if (this.props.isLoading) {

            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }

        return (
            <View>
                <Text style={{ marginTop: 20}}>That History App 🎉</Text>

                <View style={{ borderWidth: 2, marginTop: 20, borderColor: 'black', height: '80%', width: '100%' }}>
                    
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        followsUserLocation={true}
                        showsUserLocation={true}
                        style={{flex: 1}}
                        region={{
                        latitude: 51.4718,
                        longitude: -0.0749,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                        }}
                    >
                        { markers.map((each, i) => {
                            console.log('each: ', each);
                            return ( 
                                <MapView.Marker
                                    key={i}
                                    title={each.title}
                                    description={each.description}
                                    coordinate={{ latitude: each.latitude, longitude: each.longitude }}
                                    />
                            )
                        }) }
                    </MapView>
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
