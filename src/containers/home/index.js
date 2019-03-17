import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as actions from './constants';
import {markers} from '../../lib/mock-markers';

const LONDON_LAT = 51.4718;
const LONDON_LONG = -0.0749;

// get users live location from navigator.getUserLcation RN syntax
// store it in state
// render a marker at those coords


class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            userLocation: {
                lat: LONDON_LAT,
                long: LONDON_LONG
            }
        }
    }

    getUserLocation = async () => {
        try {
            await navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({
                    userLocation: {
                        lat: pos.coords.latitude,
                        long: pos.coords.longitude,
                    }
                })
            });
        } catch (error) {
            console.log('getUserLocation | error ', error);
        }
    }

    componentWillMount = () => {
        this.props.pageLoading();
    }

    componentDidMount = () => {
      this.props.pageLoaded();


    //   this.getUserLocation();

      setInterval(() => {
        this.getUserLocation();
        console.log('updated location')
      }, 3000);
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

                        <MapView.Marker
                            title="ME!"
                            description="i am here"
                            coordinate={{ latitude: this.state.userLocation.lat, longitude: this.state.userLocation.long }}
                        >
                            <Image
                                style={{width: 20, height: 20}}
                                source={{uri: 'http://freevector.co/wp-content/uploads/2009/08/24029-profile-user-silhouette1.png'}}
                            />
                        </MapView.Marker>

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
