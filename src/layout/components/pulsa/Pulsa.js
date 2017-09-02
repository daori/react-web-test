import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class Pulsa extends Component {

    constructor(){
        super();
        this.state = 
        {
            tabIndex: 0,
            tabs: ["Tabs1", "Tabs2", "Tabs3"]
        };
    
    }

    render() {
    
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                {this.state.tabs.map(function(tab) {
                    return <Tab>{tab}</Tab>
                })}
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        );
    }
}