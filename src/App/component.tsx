import * as React from 'react';
import MainRoutes from "../routes/routes"
import { NavLink } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorBoundary from '../common/ErrorBoundary';
import * as Styled from './style';

class App extends React.Component<any, any> {
    state: any = {
        isAllow: false
    };

    onClickBtn() {
        this.setState({ isAllow: !this.state.isAllow })
        this.props.setAuthenticated(this.state.isAllow);
        console.log("test");
    }

    render() {
        return (
            <ErrorBoundary>
                <MainLayout>
                    <Styled.Button onClick={() => this.onClickBtn()}> Allow Home </Styled.Button>
                    <NavLink to="/home">
                        home
                    </NavLink>
                    <NavLink to="/login">
                        login
                    </NavLink>
                    <MainRoutes />
                </MainLayout>
            </ErrorBoundary>
        );
    }
}

export default App;