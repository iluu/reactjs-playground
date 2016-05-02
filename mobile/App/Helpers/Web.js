var React = require('react-native');

var {
    View,
    WebView,
    StyleSheet
} = React;

class Web extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{uri: this.props.url}} />
            </View>
        )
    }
};

Web.propTypes = {
    url: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
});

module.exports = Web;