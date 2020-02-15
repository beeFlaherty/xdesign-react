const initialState = {
	loading: false,
	launches: [{"flight_number":1,"mission_name":"FalconSat","launch_date_local":"2006-03-25T10:30:00+12:00","rocket":{"rocket_name":"Falcon 1"}},{"flight_number":2,"mission_name":"DemoSat","launch_date_local":"2007-03-21T13:10:00+12:00","rocket":{"rocket_name":"Falcon 1"}},{"flight_number":3,"mission_name":"Trailblazer","launch_date_local":"2008-08-02T15:34:00+12:00","rocket":{"rocket_name":"Falcon 1"}},{"flight_number":4,"mission_name":"RatSat","launch_date_local":"2008-09-28T11:15:00+12:00","rocket":{"rocket_name":"Falcon 1"}},{"flight_number":5,"mission_name":"RazakSat","launch_date_local":"2009-07-13T15:35:00+12:00","rocket":{"rocket_name":"Falcon 1"}}]
}

const reducer = (state = initialState, action) => {
	return state;
};

export default reducer;
