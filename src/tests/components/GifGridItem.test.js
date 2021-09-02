import {shallow} from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem /> tests', () => {
    const id = 354;
    const title = 'A title';
    const url = 'http://localhost/some_image.jpg';
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

    test('should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a p element with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have an image with the same props', () => {
        const img = wrapper.find('img');
        expect(img.prop('id')).toBe(id);
        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    });

    test('should have the animate__fadeIn class', () => {
        const div = wrapper.find('div');
        console.log(div.props());
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
})
