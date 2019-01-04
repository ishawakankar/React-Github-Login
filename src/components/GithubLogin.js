import React from 'react';
import GitHubLogin from 'react-github-login';

export default class Github extends React.Component {

    render() {
        const onSuccess = response => console.error('Success response',response);
        const onFailure = response => console.error('Failed response',response);
        return (
            <GitHubLogin clientId="client_id"
                onSuccess={onSuccess}
                onFailure={onFailure} />

        );
    }
}
