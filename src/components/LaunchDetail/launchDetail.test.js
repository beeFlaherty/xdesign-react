
import {getFormattedDate} from './LaunchDetail';

describe('Launch Detail Tests', ()=> {

	const date = '2019-06-25T03:30:00.000Z';
	const formattedDate = '25th Jun 2019';

	it ('should retrun Formatted date', ()=>{
		expect(getFormattedDate(date)).toBe(formattedDate);
	});

})
