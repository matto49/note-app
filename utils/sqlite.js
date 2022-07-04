export function openDatabase(name = 'articles', path = '_doc/articles.db') {
	plus.sqlite.openDatabase({
		name,
		path,
		success(e) {
			console.log('数据库已打开')
		},
		fail(e) {
			console.log(e)
		}
	})
}
export function isOpen(name = 'articles', path = '_doc/articles.db') {
	return plus.sqlite.isOpenDatabase({
		name,
		path
	})
}
export function closeDatabase(name = 'articles', path = '_doc/articles.db') {
	plus.sqlite.closeDatabase({
		name,
		path,
		success(e) {
			console.log('数据库已关闭')
		},
		fail(e) {
			console.log(e)
		}
	})
}
export function createArticlesTable() {
	plus.sqlite.executeSql({
		name: 'articles',
		sql: 'create table if not exists article("id" integer primary key autoincrement,"createAt" text not null,"content" text not null,"text" text,"tags" text)',
		success(e) {
			console.log("表创建成功")
		},
		fail(e) {
			console.log(e)
		}
	})
}
export function addArticle(content, date, text, tags = "未分类") {
	createArticlesTable();
	plus.sqlite.executeSql({
		name: 'articles',
		sql: 'insert into article (createAt,content,text,tags) values ("' + date + '","' + content + '","' + text +
			'","' + tags +
			'")',
		success(e) {
			console.log("数据添加成功")
		},
		fail(e) {
			console.log("数据添加失败", e)
		}
	})
}
export function editArticle(content,text,tags = "未分类") {
	plus.sqlite.executeSql({
		name: 'articles',
		sql: 'update article set content = "'+content+'", text = "'+text+'",tags = "'+tags+'"',
		success(e) {
			console.log("数据更改成功")
		},
		fail(e) {
			console.log("数据更改失败")
		}
	})
}
export async function getArticles() {
	let data;
	await new Promise((resolve, reject) => {
		plus.sqlite.selectSql({
			name: 'articles',
			sql: 'select id,createAt,content,text,tags from article order by id desc',
			success(e) {
				data = e;
				resolve(e)
			},
			fail(e) {
				console.log("获取笔记失败", e)
				reject(e)
			}
		})
	})
	return data;
}
