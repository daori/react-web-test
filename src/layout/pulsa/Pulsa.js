import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default class Pulsa extends React.Component {

    constructor(){
        super();
        this.state = {tabIndex: 0};
    }
    render() {
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        );
    }
}