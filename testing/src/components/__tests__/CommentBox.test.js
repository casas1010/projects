import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../reducers/Root';


let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);

})
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and 2 button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
    beforeEach(() => {

        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        });
        wrapped.update();

    });

    it("has a text areas that users can type into ", () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('has a submit button users can use to submit form, text area get clear', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });


})












// it('has a text area that users can type into', () => {
//     wrapped.find('textarea').simluate('change', {
//         target: { value: 'new comment' }
//     });
//     wrapped.update();

//     expect(wrapped.find('textarea').prop('value').toEqual('new comment'));


// });















