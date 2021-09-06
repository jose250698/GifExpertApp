import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('<GifGrid /> tests', () => {

    const category = 'EVO X';
    // let wrapper = shallow(<GifGrid category={category} />);

    test('should show component correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when images are loaded', () => {
        let gifs = [{
            id: 'abc', 
            title: 'Página', 
            url: '/icon.png'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

})
