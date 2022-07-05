<template>
	<view class="container">
		<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		<view class="articles"><articles :articles="articles"></articles></view>
	</view>
</template>

<script>
function getDate(date, AddDayCount = 0) {
	if (!date) {
		date = new Date();
	}
	if (typeof date !== 'object') {
		date = date.replace(/-/g, '/');
	}
	const dd = new Date(date);

	dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期

	const y = dd.getFullYear();
	const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
	const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
	return {
		fullDate: y + '-' + m + '-' + d,
		year: y,
		month: m,
		date: d,
		day: dd.getDay()
	};
}
function getTimeSpan(day) {
	// day: 2022-07-05
	let day1 = day + ' 00:00:00';
	let num = parseInt(day[9]) + 1;
	let day2 = day.slice(0, 9) + num + ' 00:00:00';
	return [day1, day2];
}
import { openDatabase, closeDatabase, getArticlesBydate,modifyData,getArticles,getDay } from '@/utils';
export default {
	components: {},
	data() {
		return {
			showCalendar: false,
			info: {
				lunar: true,
				range: true,
				insert: false,
				selected: []
			},
			articles: []
		};
	},
	async onShow() {
		await openDatabase();
		let articles = modifyData(await getArticles());
		console.log(articles)
		await closeDatabase();
		articles.forEach((item)=> {
			this.info.selected.push({
				date: getDate(new Date(item.createAt)).fullDate,
			})
		})
		let daySpan = getTimeSpan(getDay(new Date()));
		await openDatabase();
		this.articles = modifyData(await getArticlesBydate(daySpan[0], daySpan[1]));
		await closeDatabase();
	},
	onReady() {
		this.$nextTick(() => {
			this.showCalendar = true;
		});
	},
	methods: {
		open() {
			this.$refs.calendar.open();
		},
		close() {
			console.log('弹窗关闭');
		},
		async change(e) {
			let daySpan = getTimeSpan(e.fulldate);
			await openDatabase();
			this.articles = modifyData(await getArticlesBydate(daySpan[0], daySpan[1]));
			await closeDatabase();
		},
		confirm(e) {
			console.log('confirm 返回:', e);
		},
		monthSwitch(e) {
			console.log('monthSwitchs 返回:', e);
		}
	}
};
</script>

<style lang="scss">
.container {
	padding-top: var(--status-bar-height);
	.articles {
		bottom: 20px;
	}
}
</style>
