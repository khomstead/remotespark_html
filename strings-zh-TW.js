var __svi18n = {
		noauth: "抱歉，妳沒有通過身份驗證。",
		wait: "請稍等，連接中。。。。。。",
		errorDecompress: "解壓數據時出錯。",
		logError: "登錄失敗。",
		remoteApp: {
			warn: "警告：這是下列正在運行的程序的父窗口：",
			close: "請使用程序自己的菜單來關閉程序。"
		},
		info:{
			"closed": "連接被關閉了。",
			"recordig": "提示：妳的連接被錄制和監視中。",
			"menucopy": "複製貼上只能用鍵盤完成(Ctrl+C, Ctrl+V, Ctrl+X)",
			"restart": "請重新啟動Gateway",
			"files": "我的文件",
			"info": "信息",
			"joinsession": "%1加入到當前連接, 來自%2 %3",//%1 sessionId, %2 hostname, %3 user name
			"exitsession": "%1退出當前連接, 來自%2 %3",
			"givecontrol": "你擁有輸入控制",
			"nocontrol": "你不在擁有輸入控制",
			"title": "%1 %2 @ %3",//title of request contrl, %1 user name, %2 number ID, %2 host name
			"recontrol": "請求輸入控制"
		},
		errorCode: {
			"1": "連接被服務器端的另一個連接中的管理工具關閉。",
			"2": "服務器端的另一個連接中的管理工具將本次連接退出。",
			"3": "服務器端的空閑超時已超過。",
			"4": "已超過服務器端的連接時限。",
			"5": "另外一個用戶連接到服務器，強制中斷了本次連接。",
			"6": "服務器內存不夠。",
			"7": "服務拒絕了本次連接。",
			"9": "因爲權限問題，不能連接到服務器。",
			"A": "服務器要求每次必須輸入身份驗證",
			"B": "連接被服務器端本會話中的管理工具關閉",
			//Protocol-independent licensing codes:
			"100": "終端服務器內不錯（軟件許可證組件），",
			"101": "找不到軟件許可服務器",
			"102": "沒有客戶端連接軟件許可。",
			"103": "不合法的客戶端軟件許可消息。",
			"104": "客戶端保存的軟件許可被修改",
			"105": "客戶端保存的軟件許可是非法。",
			"106": "網絡錯導致軟件許可通訊中斷。",
			"107": "客戶端終端了軟件許可通訊。",
			"108": "不正確的軟件許可消息加密。",
			"109": "不能更新或升級客戶端軟件許可。",
			"10A": "遠程計算機沒有遠程連接許可",
			"connection": "不能連接到服務器！",
			//error code from server
			"S0": "發現新的RemoteApp或遠程計算機, 請刷新本地列表",
			"S1": "軟件授權過期。",
			"S2": "妳必須先登錄。",
			"S3": "服務器關閉了本次連接。",
			"S4": "輸入控制請求被拒絕",
			"S3000": "不正確的用戶名或密碼。",
			"S3001": "沒有存取權限。",
			"S3002": "不能生成PDF文件。",
			"S3003": "沒有發現PDF轉換程序.",
			"S3004": "主機名不存在: ",
			"S3005": "錯誤：",
			"S3006": "錯誤的用戶名或密碼",
			"S3007": "文件不存在",
			"S3008": "播放文件失敗",
			"S3009": "僅接受來自本地的連接。你可以嘗試：localhost, 127.0.0.1, 主機名, 或本地IP",
			"S3010": "找不到要加入的連接，或者該連接不可以被共享",
			"S3011": "服務器已達到最大連接數限制"
		},
		serverStatus: {
			"401": "發現目標計算機。",
			"402": "正在准備目標計算機供使用。",
			"403": "目標計算機翼准備好接受客戶端連接。",
			"404": "客戶正被重新定位到目標計算機。",
			"501": "正在裝載目標虛擬機。",
			"502": "正在喚醒目標虛擬機。",
			"503": "正在啓動目標虛擬機。"
		},
		file:{
			"zero": "文件大小爲0，忽略本文件",
			"slice": "FileReader不支持片段存取（slice）",
			"uploadDone": "文件上傳完畢，請在遠程計算機裏刷新妳的共享磁盤。",
			"folder": "資料夾",
			"1": "不合法的資料夾 名",
			"2": "不是一個資料夾 "
		},
		player:{
			"noinput": "找不到要播放的文件",
			"fmterror": "不合法的文件格式" 
		},
		template: {
			"filecontainer": '<div id="total" class="progressback" style="display: none">\
						上傳中...<div class="progressfront"></div>\
						</div>\
						<div class="th">妳的位置： <span id="parentPath"></span><input type="file" id="uploadfile" name="upload" multiple /></div>\
						<table id="filelist" summary="File List">\
						<thead>\
							<tr>\
							<th scope="col">名稱</th>\
							<th scope="col">類型</th>\
							<th scope="col">大小</th>\
							<th scope="col">修改日期</th>\
							<th scope="col">動作</th>\
							</tr>\
						</thead>\
						<tbody>\
							<tr style="cursor: pointer">\
								<td></td>\
								<td></td>\
								<td align="right"></td>\
								<td></td>\
								<td><img src="download.png" title="下載" name="download"><img src="view.png" name="view" title="打開"></td>\
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
console.log("strings-zh-CN loaded");