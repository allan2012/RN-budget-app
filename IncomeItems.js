import React, { Component } from 'react'
import { AppRegistry, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, List, ListItem, Content, Left, Right, H3, Icon } from 'native-base';
import PieChart from 'react-native-pie-chart';


export default class IncomeItems extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem >
                            <Left>
                                <Text>Salary</Text>
                            </Left>
                            <Right>
                                <Text>KES 125,500</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Loan Repayment</Text>
                            </Left>
                            <Right>
                                <Text>KES 2,500</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Bonus</Text>
                            </Left>
                            <Right>
                                <Text>KES 114,500</Text>
                            </Right>
                        </ListItem>                      
                    </List>
                </Content>
            </Container>
        )
    }
}
