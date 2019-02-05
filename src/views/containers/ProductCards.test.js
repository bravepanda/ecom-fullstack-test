import React from 'react';
import mockAxios from 'axios';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductCards from './ProductCards';
import ProductCard from '../components/ProductCard/ProductCard';

Enzyme.configure({ adapter: new Adapter() });

describe('<ProductCards />', () => {   
    let mockData = {
        data: [
            {
                title: 'Simple Canvas'
            },
            {
                title: 'Dummy Canvas'
            }
        ]
    };

    it('should render the Product Cards container and show "Loading..."', async () => {
        mockAxios.get.mockImplementation(() => {
            return Promise.resolve(mockData);
        });
        let wrapper = shallow(<ProductCards />);
        
        expect(wrapper.find('.product-cards')).toHaveLength(1);
        expect(wrapper.find('.product-cards').text()).toEqual('Loading...');
        
        await wrapper.instance().fetchProducts;
    });

    it('should render two <ProductCard /> components', async () => {
        mockAxios.get.mockImplementation(() => {
            return Promise.resolve(mockData);
        });

        let wrapper = shallow(<ProductCards />);  
        
        await wrapper.instance().fetchProducts;

        expect(wrapper.find('.product-cards ul').contains([
            <ProductCard title="Simple Canvas" />,
            <ProductCard title="Dummy Canvas" />
        ])).toBeTruthy();
    });

    it('should show an error message if fetching products fails', async () => {
        mockData = { error : {
            message: 'Error'
        }};
        mockAxios.get.mockImplementation(() => {
            return Promise.reject(mockData);
        });

        let wrapper = shallow(<ProductCards />);
        
        await wrapper.instance().fetchProducts;

        expect(wrapper.find('.product-cards').text()).toEqual('There has been an error.');
    });
});