import React, { Component }  from 'react'
import { AppRegistry, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Grid, Col, Label, Input, Header, Button, H3, Icon, Content, Form, Item, Picker} from 'native-base';
import PieChart from 'react-native-pie-chart';


export default class AddIncome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    // const goToAbout = () => {
    //     Actions.about()
    // }
    render() {
        return (
            <Container>
                <Content style={{ paddingTop: 100}}>
                    <Form style={{ padding: 30}}>
                        <Item inlineLabel>
                            <Label>Amount(Kes)</Label>
                            <Input />
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Button block rounded light style={{ margin: 50, padding: 5}}>
                    <H3>Save</H3>
                </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}
