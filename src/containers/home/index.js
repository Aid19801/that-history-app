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
                <Text>I AM A GOD DAMN HOME PAGE</Text>

                <View style={{ borderWidth: 2, marginTop: 20, borderColor: 'black', height: '80%', width: '100%' }}>
                    
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{flex: 1}}
                        region={{
                        latitude: 51.4718,
                        longitude: -0.0749,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                        }}
                        showsUserLocation={true}
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
