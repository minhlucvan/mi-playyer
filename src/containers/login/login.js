import React from 'react'
import { push } from 'react-router'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login'

class LoginForm extends React.Component {
    
    responseGoogle = (response) => {
        console.log(response);
        this.props.enter();

    }

    render = () => (
        <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column>
                <Button primary>
                    <Icon name="play" /> Start Feeling Now
                </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <GoogleLogin
                    clientId="63748869594-o9o9f78or4okkehmj9civjd8geijmqc9.apps.googleusercontent.com"
                    buttonText="Login"
                    scope="profile email"
                    isSignedIn={this.responseGoogle}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                >
                    <Icon name="sign in" />
                    <span> Login with Google</span>
                </GoogleLogin>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default LoginForm
