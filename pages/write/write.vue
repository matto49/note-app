<template>
	<view class="container">
		<view class="headder">
			<view class="top-view status"></view>
			<view class="titles">
				<view class="titleLeftButton" @click="returnToIndex"><image class="button" src="/static/left-arrow.svg"></image></view>
				<view class="titleText">{{ date }}</view>
				<view class="titleRightButton" @click=""><image class="button" src="/static/note.svg"></image></view>
			</view>
		</view>
		<jinEdit class="edit" placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#" :html="editData.content"></jinEdit>
	</view>
</template>
<script>
import jinEdit from '../../components/jin-edit/jin-edit.vue';
import { openDatabase, isOpen, closeDatabase, addArticle, editArticle,getStandardDate,addNote ,editNote} from '@/utils';
let isEdit = false;
let token = uni.getStorageSync("token")
export default {
	data() {
		return {
			html: '',
			date: '',
			editData: {},
			tags: ["未分类"],
			id: 0
		};
	},
	components: {
		jinEdit
	},
	methods: {
		// 点击发布
		async editOk(e) {
			console.log(e)
			await openDatabase();
			if(!isEdit) {
				this.tags.forEach(async (item) => {
					await addArticle(e.html, this.date, e.text,item);
					await addNote(this.date,e.text,e.html,item,token);
				})
			} else {
				this.tags.forEach(async (item) => {
					await editArticle(e.html,e.text,item,this.id)
					await editNote(this.date,e.text,e.html,item,token,this.id)
				})
			}
			await closeDatabase();
			this.returnToIndex();
		},
		returnToIndex() {
			uni.navigateTo({
				url:'/pages/index/index'
			});
		}
	},
	onLoad(e) {
		if (e.data) {
			const data = JSON.parse(e.data);
			this.editData = data;
			this.date = getStandardDate(new Date(data.createAt));
			this.id = data.id;
			isEdit = true;
		} else {
			this.date = getStandardDate(new Date());
		}
	}
};
</script>
<style lang="scss" scoped>
.headder {
	height: calc(var(--status-bar-height) + 30px);
	width: 100%;
	position: fixed;
	background-color: white;
	.status {
		height: var(--status-bar-height);
	}
	.titles {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 30rpx;
		.button {
			height: 50rpx;
			width: 50rpx;
		}
		.titleLeftButton {
			padding-top: 7px;
			padding-left: 20rpx;
		}
		.titleRightButton {
			padding-top: 10px;
		}
		.titleText {
			align-self: center;
		}
	}
}
.edit {
	padding-top: 80px;
	padding-left: 20rpx;
}
</style>
