import React from 'react'
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, List, ListItem, Button, Right, Left, Card, Content} from 'native-base';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10
    }
});

const chart_wh = 250;
const series = [123, 537, 900];
const sliceColor = ['#a6dff2', '#1a79db', '#3eb5e1'];

const redirectToAddIncome = () => {
    Actions.add_income();
}

const redirectToAddExpense = () => {
    Actions.add_expense();
}

const redirectToExpenses = () => {
    Actions.expenses();
}

const Home = () => {

    return (
        <Container style={cn}>
            <ScrollView style={{flex: 1, marginTop: 20}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Spendr</Text>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={sliceColor}
                        doughnut={true}
                        coverRadius={0.55}
                        coverFill={'#FFF'}
                    />
                </View>
            </ScrollView>
            <Content>
                <Card transparent>
                    <List style={{padding: 25}}>
                        <ListItem>
                            <Left>
                                <Text>Income(Kes)</Text>
                            </Left>
                            <Right><Text>546,700</Text></Right>
                        </ListItem>
                        <ListItem noIndent style={{
                            backgroundColor: "#cde1f9",
                            color: '#fff',
                            fontWeight: '700'
                        }}
                                  onPress={redirectToExpenses}>
                            <Left>
                                <Text>Expenses(Kes)</Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#fff', fontWeight: '700'}}>102,500</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Available(Kes)</Text>
                            </Left>
                            <Right><Text style={{color: '#1a79db', fontWeight: '700'}}>12,500</Text></Right>
                        </ListItem>
                    </List>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{padding: 10}}>
                            <Button rounded bordered primary onPress={redirectToAddIncome} style={{width: 120}}
                                    block><Text>+</Text></Button>
                        </View>
                        <View style={{padding: 10}}>
                            <Button rounded bordered primary onPress={redirectToAddExpense} style={{width: 120}}
                                    block><Text>-</Text></Button>
                        </View>
                    </View>
                </Card>
            </Content>
        </Container>
    )
}

const cn = {display: 'flex'};
const actionButton = {margin: 10, marginLeft: 150, marginRight: 150, padding: 5}
export default Home