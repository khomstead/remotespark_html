var __svi18n = {
		noauth: "Sorry, you are not authorized",
		wait: "Please wait while connecting...",
		errorDecompress: "Error on decompressing data.",
		logError: "The logon process failed.",
		remoteApp: {
			warn: "Warning: This is the parent window of following RemoteApps:",
			close: "Please quite out appplicaiton from application's File menu."
		},
		info:{
			"closed": "Connection was closed!",
			"recordig": "You session is recorded and monitored.",
			"menucopy": "Copying and pasting are unavailabe via the Edit menu, but you can use Ctrl+C, Ctrl+V and Ctrl+X.",
			"restart": "Please restart gateway.",
			"files": "My Files",
			"info": "Information",
			"joinsession": "Session %1 joined, from %2 %3",//%1 sessionId, %2 hostname, %3 user name
			"exitsession": "Session %1 existed, from %2 %3",
			"givecontrol": "You have the cotrol.",
			"nocontrol": "Your don't have control any more.",
			"title": "%1 %2 @ %3",//title of request contrl, %1 user name, %2 number ID, %2 host name
			"recontrol": "Reuesting control"
		},
		errorCode: {
			"1": "The disconnection was initiated by an administrative tool on the server in another session.",
			"2": "The disconnection was due to a forced logoff initiated by an administrative tool on the server in another session.",
			"3": "The idle session limit timer on the server has elapsed.",
			"4": "The active session limit timer on the server has elapsed.",
			"5": "Another user connected to the server, forcing the disconnection of the current connection.",
			"6": "The server ran out of available memory resources.",
			"7": "The server denied the connection.",
			"9": "The user cannot connect to the server due to insufficient access privileges.",
			"A": "The server does not accept saved user credentials and requires that the user enter their credentials for each connection.",
			"B": "The disconnection was initiated by an administrative tool on the server running in the user's session.",
			//Protocol-independent licensing codes:
			"100": "An internal error has occurred in the Terminal Services licensing component.",
			"101": "A Terminal Server License Server could not be found to provide a license.",
			"102": "There are no Client Access Licenses  available for the target remote computer.",
			"103": "The remote computer received an invalid licensing message from the client.",
			"104": "The Client Access License stored by the client has been modified.",
			"105": "The Client Access License stored by the client is in an invalid format",
			"106": "Network problems have caused the licensing protocol to be terminated.",
			"107": "The client prematurely ended the licensing protocol.",
			"108": "A licensing message was incorrectly encrypted.",
			"109": "The Client Access License stored by the client could not be upgraded or renewed.",
			"10A": "The remote computer is not licensed to accept remote connections",
			"connection": "Failed to connect to Gateway!",
			//error code from server
			"S0": "New RemoteApp or desktop found. Please refresh your list.",
			"S1": "License expired.",
			"S2": "You must log in first.",
			"S3": "Disconnected by server.",
			"S4": "Control request was refused",
			"S3000": "Invalid user.",
			"S3001": "No access right.",
			"S3002": "Failed to generate PDF file.",
			"S3003": "PDF Converter not found.",
			"S3004": "Unknown host name: ",
			"S3005": "Error:",
			"S3006": "Wrong user name or password!",
			"S3007": "File not found",
			"S3008": "Failed to play file",
			"S3009": "Only accept connections from localhost. You can try localhost, 127.0.0.1, host name, or local IP",
			"S3010": "Session not found or can not be joined",
			"S3011": "Maximum number of concurrent users is reached."
				
		},
		serverStatus: {
			"401": "The destination computer is being located.",
			"402": "The destination computer is being prepared for use.",
			"403": "The destination computer is being prepared to accept a remote connection.",
			"404": "The client is being redirected to the destination computer.",
			"501": "The destination virtual machine image is being loaded.",
			"502": "The destination virtual machine is being resumed from sleep or hibernation.",
			"503": "The destination virtual machine is being booted"
		},
		file:{
			"zero": "File size is 0, ignored ",
			"slice": "FileReader doesn't support slice",
			"uploadDone": "File uploading finished. Please refresh the shared disk in My Computer.",
			"folder": "folder",
			"1": "Invalid directory.",
			"2": "Not a directory"
		},
		player:{
			"noinput": "No input found.",
			"fmterror": "Invalid file format." 
		},
		template: {
			"filecontainer": '<div id="total" class="progressback" style="display: none">\
							Uploading...<div class="progressfront"></div>\
						</div>\
						<div class="th">Your Position: <span id="parentPath"></span><input type="file" id="uploadfile" name="upload" multiple /></div>\
						<table id="filelist" summary="File List">\
						<thead>\
							<tr>\
							<th scope="col">Name</th>\
							<th scope="col">Type</th>\
							<th scope="col">Size</th>\
							<th scope="col">Date modified</th>\
							<th scope="col">Action</th>\
							</tr>\
						</thead>\
						<tbody>\
							<tr style="cursor: pointer">\
								<td></td>\
								<td></td>\
								<td align="right"></td>\
								<td></td>\
								<td><img src="download.png" title="Download" name="download"><img src="view.png" name="view" title="View"></td>\
							</tr>\
						</tbody>\
						</table>',
			"loaded": false,
			"init": function(){
				var fc = document.getElementById("filecontainer");
				var tp = __svi18n.template;
				if (fc){
					fc.innerHTML = tp.filecontainer;
					console.log("file container template loaded.");
				}else{
					if (tp.loaded) return;
					window.addEventListener('load', tp.init, false);
				}
				tp.loaded = true;
			}
		}
};
__svi18n.template.init();
console.log("strings-en loaded");