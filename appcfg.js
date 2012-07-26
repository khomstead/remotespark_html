//You don't even need this file if you don't want to change the default values
if (typeof hi5 == "undefined"){
	hi5 = {};
}

hi5.appcfg ={
		displayMsg: true,//If display error or warning message
		sessionTimeout: 300000,//Close the session disconnection if no RemoteApp running after this period. default is 5 minutes
		appTimeout: 800,//Close the RemoteApp if no Windows found after this period, default is 800 ms.
		reconnectOnResize: true,//If reconnect when resize the browser window, default is true
		reconnectTimes: 0,//Automatically reconnecting time, default 0.
		windowState: 3,//state of RemoteApp main window, 3: always maximized, 0: controlled by user
		openLink: true,//if show the link button when user copy a link in remote computer
		notification: true,//Desktop notification, this will be false if displayMsg = false;
		setTitle: true,//set server name as title
		audioBuffer: 0, //2 second delay for audio
		img: {
			close: "close.png",
			cloud: "cloud.png",
			info: "info.png",
			kbd: "kbd.png",
			shadowing: "info.png"
		},
		toolbar: {fadable : true}
};