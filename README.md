# react-native-redux-boilerplate

RNRB is a boilerplate designed to get new (MVP/prototype) React Native apps up and running super quick 🎉

Includes:

React Native
Redux (app state management)
Apple & Google Maps functionality (via react-native-maps)

To setup

git clone
cd react-native-redux-boilerplate
yarn
cd ios && pod install
cd .. && react-native link

## GOOGLE MAPS

🚨XCODE:-

open Xcode, navigate to `react-native-redux-boilerplate/ios/myApp/myApp/appDelegate.m` file.

Put Google Maps API Key In Line 17, here:
```
  [GMSServices provideAPIKey:@"YOUR_MAPS_API_KEY_HERE"];
```

🚨 ANDROID:-
open Android Studio, nav to `react-native-redux-boilerplate/android/app/src/main/AndroidManifest.xml`

Put your Google Maps API Key in Line 17-19:

```
        <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_MAPS_API_KEY_HERE" />
```


Now Run:
Android: cmd+fn+f9 & ctrl+R
Xcode:  cmd-B & cmd-R

