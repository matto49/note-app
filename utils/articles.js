export function modifyData(data) {
	// 这个数据就是普通对象，不是JSON数据
	let preDate = "";
	return data.reduce((pre, cur, index) => {
		if (preDate === cur.createAt) {
			const length = pre.length;
			pre[length - 1].tags.push(cur.tags);
			return pre;
		} else {
			const tag = cur.tags;
			cur.tags = [];
			cur.tags.push(tag);
			pre.push(cur);
			preDate = cur.createAt;
			return pre;
		}
	}, [])
}
