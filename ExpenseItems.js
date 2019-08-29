import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Container, List, Content, Left, Right, H3} from 'native-base';
import { Toolbar } from 'react-native-material-ui';

export default class ExpenseItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }
    render() {
        return (
        <Toolbar
            leftElement="menu"
            centerElement="Searchable"
            searchable={{
                autoFocus: true,
                placeholder: 'Search',
            }}
            rightElement={{
                menu: {
                    icon: "more-vert",
                    labels: ["item 1", "item 2"]
                }
            }}
            onRightElementPress={ (label) => { console.log(label) }}
        />)
    }
}
