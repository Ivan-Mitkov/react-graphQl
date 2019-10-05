import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from './Meta';

export class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
               <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Page
