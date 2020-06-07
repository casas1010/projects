import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useResources from './useResources'

const ResourceList = ({ resource }) => {

    const resources = useResources(resource)


    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );

}

export default ResourceList;

//https://jsonplaceholder.typicode.com/




//[prevProps] how prevProps works : https://www.udemy.com/course/react-redux/learn/lecture/12823363#questions






/*

class ResourceList extends React.Component {
    state = { resources: [] };

    async componentDidMount() { //only called once during the begining!
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data });
        // axios puts all the infom from response in .data

    }
                            //[prevProps]
    async componentDidUpdate(prevProps) { //update if comonpent or parent component gets updated

        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }

    }

    render() {
        return (
            <div>{this.state.resources.length}</div>
        );
    }
}
*/


