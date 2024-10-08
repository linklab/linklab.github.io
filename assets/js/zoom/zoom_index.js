ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.7.9/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const zoomMeeting = document.getElementById("zmmtg-root")

const meetConfig = {
	apiKey: 'mxVT4mKjRvq6V4tsYnUbqg',
	meetingNumber: '123456789',
	leaveUrl: 'https://yoursite.com/meetingEnd',
	userName: 'Youn-Hee Han',
	userEmail: 'yh21.han@gmail.com', // required for webinar
	passWord: 'password', // if required
	role: 1 // 1 for host; 0 for attendee or webinar
};



