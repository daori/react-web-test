import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent from './tabContent.js'


export default class Pulsa extends React.Component {

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
                    return <Tab key={tab}>{tab}</Tab>
                })}
                </TabList>
                <TabPanel>
                    <TabContent/>
                </TabPanel>
                <TabPanel>
                    <h2>Any content e</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        );
    }
}