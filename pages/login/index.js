import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Left, Body, Right, Title, Header, Content, Button, Text } from 'native-base';
import Styles from '../../styles/global.style.js';
import t from 'tcomb-form-native';
import option from '../../utils/validators';

let Form = t.form.Form;
let Login = t.struct({
    email: t.String,
    password: t.String
});

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showToast: false
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Login Page</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={Styles.content}>
                    <Form
                        ref="form"
                        type={Login}
                        options={option.login}
                    />
                    <Button block dark style={{ marginTop: 10 }} onPress={e => this.onPress()}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    onPress() {
        const value = this.refs.form.getValue();
        const data = { email: 'admin@gmail.com', password: 'admin' };

        if (value && value.email === data.email && value.password === data.password) {
            this.props.navigation.navigate('Home');
        } else {
            Alert.alert('Email or password incorrect!');
        }
    }

}

