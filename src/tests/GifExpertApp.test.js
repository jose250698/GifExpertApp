import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';


describe('<GifExpertApp /> tests', () => {

    let wrapper = shallow(<GifExpertApp  />);

    test('should show component correctly', () => {
        wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const categories = ['Warzone', 'Naruto'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
