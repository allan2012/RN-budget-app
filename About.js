import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button } from 'native-base';

const About = () => {
    
    const goToHome = () => {
        Actions.home()
    }

    return (
        <Container>
            <Content>
                <Button light onPress={goToHome}><Text>Go To Map</Text></Button>
            </Content>
        </Container>
    )
}

export default About