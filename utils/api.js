export function register(username,password,nickname) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/user",
		method: "POST",
		data: JSON.stringify({
			username,
			password,
			nickname
		}),
		success: () => {
			console.log("注册成功!")
		}
	})
}
export function login() {
	
}
export function getNoteList() {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note",
		header: {
			Authorization: ""
		}
	})
}
export function addNote(createAt, text, content, tags) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note",
		method: "POST",
		header: {
			Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXR0byIsImV4cCI6MTY1Njk0NDAxN30.tokAoxLENVE2gwVCIqGwl45-jGhVOnUhOwnajxKwouo",
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
export function editNote(id, content) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note/" + id,
		method: "PUT",
		header: {
			Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXR0byIsImV4cCI6MTY1Njk0NDAxN30.tokAoxLENVE2gwVCIqGwl45-jGhVOnUhOwnajxKwouo",
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
export function deleteNote(id) {
	uni.request({
		url: "http://121.196.222.1:8000/api/v1/note"
	})
	data: {
		id
	}
}
