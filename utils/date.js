export function getStandardDate(date) {
	const year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()
	if (month < 10) {
		month = `0${month}`
	}
	if (day < 10) {
		day = `0${day}`
	}
	hour = hour.toString().padStart(2, '0')
	minute = minute.toString().padStart(2, '0')
	second = second.toString().padStart(2, '0')
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
};
export function formatMonth(date) {
	let dict = {
		"0": "零",
		"1": "一",
		"2": "二",
		"3": "三",
		"4": "四",
		"5": "五",
		"6": "六",
		"7": "七",
		"8": "八",
		"9": "九",
		"10": "十",
		"11": "十一",
		"12": "十二",
		"13": "十三",
		"14": "十四",
		"15": "十五",
		"16": "十六",
		"17": "十七",
		"18": "十八",
		"19": "十九",
		"20": "二十",
		"21": "二十一",
		"22": "二十二",
		"23": "二十三",
		"24": "二十四",
		"25": "二十五",
		"26": "二十六",
		"27": "二十七",
		"28": "二十八",
		"29": "二十九",
		"30": "三十",
		"31": "三十一"

	};
	let dateStr = getStandardDate(date).split(' ')[0].split('-')
	let	yy = dateStr[0];
	let	mm = dateStr[1];
	let	dd = dateStr[2];

	let yearStr = dict[yy[0]] + dict[yy[1]] + dict[yy[2]] + dict[yy[3]] + '年',
		monthStr = dict['' + Number(mm)] + '月',
		dayStr = dict[dd];
	let result = `${yearStr} ${monthStr}`
	return result;
};
export function formatWeek(date) {
	const thisDay = new Date(date).getDay()
	const weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	return weekDay[thisDay]
};
export function formatMiniute(date) {
	let dateStr = getStandardDate(date).split(' ')[1].slice(0,5)
	return dateStr
}
