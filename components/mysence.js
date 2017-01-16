import React, {Component, PropTypes} from 'React';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class MySence extends Component {
  propTypes: {
    title: PropTypes.sting.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  static get defaultProps() {
    return {
      title: 'MySence'
    }
  }
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Text>
          Hi. my sence title is {this.props.title}
        </Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>
            tap me to load the next page
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>
            tap me to go back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
