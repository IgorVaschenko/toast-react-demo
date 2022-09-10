import React from 'react';

import { ErrorDetails, ErrorTitle, ErrorWrap } from '@/components/Errorboundary/components';

 class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorWrap>
                    <ErrorTitle>Something went wrong.</ErrorTitle>
                    <ErrorDetails>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </ErrorDetails>
                </ErrorWrap>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary