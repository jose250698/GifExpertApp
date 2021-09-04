import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('<AddCategory /> tests', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change input correctly', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', { 
            target: {
                value: value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
        
    test('should not call setCategories on submit if no send info', () => {
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and get the input cleaned', () => {
        const value = 'Hello World';

        // 1. Simulate inputChange
        wrapper.find('input').simulate('change', { target: { value }});

        // 2. Simulate submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // 3. setCategories must have been called
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. Input value must be cleaned
        expect(wrapper.find('input').prop('value')).toBe('');

    });
        
});
