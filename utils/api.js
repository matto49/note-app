export async function register(username, password, nickname) {
	let data;
	await new Promise((resolve, reject) => {
		uni.request({
			url: "http://121.196.222.1:8000/api/v1/user",
			method: "POST",
			data: JSON.stringify({
				username,
				password,
				nickname
			}),
			success: (e) => {
				data = e;
				resolve(e)
			}
		})

	})
}
export async function login(username, password) {
	let data;
	await new Promise((resolve, reject) => {
		uni.request({
			url: "http://121.196.222.1:8000/api/v1/login",
			method: "POST",
			header: {
				'Content-Type': "application/x-www-form-urlencoded"
			},
			data: {
				username,
				password
			},
			success: (e) => {
				data = e;
				resolve(e)
			}
		})
	})
	return data.data
}
export async function getNoteList(limit, page, token) {
	let data;
	await new Promise((resolve, reject) => {
		uni.request({
			url: "http://121.196.222.1:8000/api/v1/note",
			header: {
				Authorization: token
			},
			success: (e) => {
				data = e;
				resolve(e);
			}
		})
	})
	return data.data;
}
export async function addNote(createAt, text, content, tags, token) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note",
		method: "POST",
		header: {
			Authorization: token,
		},
		data: JSON.stringify({
			createAt,
			text,
			content,
			tags
		}),
		success: (res) => {
			console.log("post上传到服务器上了")
		}
	})
}
export async function editNote(date,text,html,tags,token,id) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note/" + id,
		method: "PUT",
		header: {
			Authorization: token,
		},
		data: JSON.stringify({
			createAt:date,
			text,
			content:html,
			tags
		}),
		success: (res) => {
			console.log("post上传到服务器上了")
		}
	})
}
export async function deleteNote(id, token) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note"
	})
	data: {
		id
	}
}
