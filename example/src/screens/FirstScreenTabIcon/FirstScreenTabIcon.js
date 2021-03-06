import React, {Component} from "react";
import {Text, View} from "react-native";

class FirstScreenTabIcon extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        console.log(this.props);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    render() {
        const {test} = this.props;
        return (
            <View style={{alignItems: 'center'}}>
                <Text> You are in {test} </Text>
            </View>
        );
    }
}

export default FirstScreenTabIcon;
