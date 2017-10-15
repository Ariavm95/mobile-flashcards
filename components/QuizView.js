import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
    render() {        
        return (
            <View>
                <Text>Quiz - {JSON.stringify(this.props.questions)}</Text>
            </View>
        );
    }
}

function mapStateToProps(data, {navigation}) {
    const { title } = navigation.state.params;
    return {
        questions: data[title].questions
    }
}

export default connect(mapStateToProps)(QuizView);
