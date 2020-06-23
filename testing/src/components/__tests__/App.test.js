import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
//import Adapter from '../../setupTests';

import CommentBox from '../CommentBox';
import CommentList from '../CommentList';


let wrapped;
beforeEach(() => { //helper function!    note: runs before everysingle test
    wrapped = shallow(<App />);
});

it('shows a Commentent box', () => {

    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a Commentent list', () => {

    expect(wrapped.find(CommentList).length).toEqual(1);
})