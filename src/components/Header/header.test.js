import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import Refresh from '../Refresh/Refresh';

configure({adapter: new Adapter()});

describe('Header Test', ()=> {
	let wrapper;

	beforeEach(()=>{
		wrapper = shallow(<Header/>);
	});

	it ('should render a reload button', ()=>{
		expect(wrapper.find(Refresh)).toHaveLength(1);
	});

	it ('should include a h1 tag', ()=>{
		expect(wrapper.find('h1').exists()).toBeTruthy()
	});
})
