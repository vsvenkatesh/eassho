import * as React from 'react';
import * as Styled from './style';

class Home extends React.Component<any, any> {
    state: any = {};

    render() {
        return (
            <Styled.Button className='root-class'>
                Home Component
            </Styled.Button>
        );
    }
}

export default Home;