var __svi18n = {
		noauth: "抱歉，你没有通过身份验证。",
		wait: "请稍等，连接中。。。。。。",
		errorDecompress: "解压数据时出错。",
		logError: "登录失败。",
		remoteApp: {
			warn: "警告：这是下列正在运行的程序的父窗口：",
			close: "请使用程序自己的菜单来关闭程序。"
		},
		info:{
			"closed": "连接被关闭了。",
			"recordig": "提示：你的连接被录制和监视中。",
			"menucopy": "拷贝粘贴只能用键盘(Ctrl+C, Ctrl+V, Ctrl+)操作。",
			"restart": "请重新启动Gateway",
			"files": "我的文件",
			"info": "信息",
			"joinsession": "%1加入到当前连接, 来自%2 %3",//%1 sessionId, %2 hostname, %3 user name
			"exitsession": "%1退出当前连接, 来自%2 %3",
			"givecontrol": "你拥有输入控制",
			"nocontrol": "你不在拥有输入控制",
			"title": "%1 %2 @ %3",//title of request contrl, %1 user name, %2 number ID, %2 host name
			"recontrol": "请求控制输入"
		},
		errorCode: {
			"1": "连接被服务器端的另一个连接中的管理工具关闭。",
			"2": "服务器端的另一个连接中的管理工具将本次连接退出。",
			"3": "服务器端的空闲超时已超过。",
			"4": "已超过服务器端的连接时限。",
			"5": "另外一个用户连接到服务器，强制中断了本次连接。",
			"6": "服务器内存不够。",
			"7": "服务拒绝了本次连接。",
			"9": "因为权限问题，不能连接到服务器。",
			"A": "服务器要求每次必须输入身份验证",
			"B": "连接被服务器端本会话中的管理工具关闭",
			//Protocol-independent licensing codes:
			"100": "终端服务器内不错（软件许可证组件），",
			"101": "找不到软件许可服务器",
			"102": "没有客户端连接软件许可。",
			"103": "不合法的客户端软件许可消息。",
			"104": "客户端保存的软件许可被修改",
			"105": "客户端保存的软件许可是非法。",
			"106": "网络错导致软件许可通讯中断。",
			"107": "客户端终端了软件许可通讯。",
			"108": "不正确的软件许可消息加密。",
			"109": "不能更新或升级客户端软件许可。",
			"10A": "远程计算机没有远程连接许可",
			"connection": "不能连接到服务器！",
			//error code from server
			"S0": "发现新的RemoteApp或远程计算机, 请刷新本地列表",
			"S1": "软件授权过期。",
			"S2": "你必须先登录。",
			"S3": "服务器关闭了本次连接。",
			"S4": "输入控制请求被拒绝",
			"S3000": "不正确的用户名或密码。",
			"S3001": "没有存取权限。",
			"S3002": "不能生成PDF文件。",
			"S3003": "没有发现PDF转换程序.",
			"S3004": "主机名不存在: ",
			"S3005": "错误：",
			"S3006": "错误的用户名或密码",
			"S3007": "文件不存在",
			"S3008": "文件播放失败",
			"S3009": "只接受来自本地的连接。你可以尝试：localhost, 127.0.0.1, 主机名, 或本地IP",
			"S3010": "找不到要加入的连接，或者该连接不可以被共享",
			"S3011": "服务器已达到最大连接数限制"
		},
		serverStatus: {
			"401": "发现目标计算机。",
			"402": "正在准备目标计算机供使用。",
			"403": "目标计算机翼准备好接受客户端连接。",
			"404": "客户正被重新定位到目标计算机。",
			"501": "正在装载目标虚拟机。",
			"502": "正在唤醒目标虚拟机。",
			"503": "正在启动目标虚拟机。"
		},
		file:{
			"zero": "文件大小为0，忽略本文件",
			"slice": "FileReader不支持片段存取（slice）",
			"uploadDone": "文件上传完毕，请在远程计算机里刷新你的共享磁盘。",
			"folder": "文件夹",
			"1": "不合法的文件目录名",
			"2": "不是一个文件目录"
		},
		player:{
			"noinput": "找不到要播放的文件",
			"fmterror": "不合法的文件格式" 
		},
		template: {
			"filecontainer": '<div id="total" class="progressback" style="display: none">\
						上传中...<div class="progressfront"></div>\
						</div>\
						<div class="th">你的位置： <span id="parentPath"></span><input type="file" id="uploadfile" name="upload" multiple /></div>\
						<table id="filelist" summary="File List">\
						<thead>\
							<tr>\
							<th scope="col">名称</th>\
							<th scope="col">类型</th>\
							<th scope="col">大小</th>\
							<th scope="col">修改日期</th>\
							<th scope="col">动作</th>\
							</tr>\
						</thead>\
						<tbody>\
							<tr style="cursor: pointer">\
								<td></td>\
								<td></td>\
								<td align="right"></td>\
								<td></td>\
								<td><img src="download.png" title="下载" name="download"><img src="view.png" name="view" title="打开"></td>\
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