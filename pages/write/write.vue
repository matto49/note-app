<template>
	<view class="courseIntroduce">
				<view class="navBar">
					<view class="title">课程介绍</view>
					<view class="edit" v-if="isEdit" @tap="toEdit">编辑</view>
				</view>
				<view class="editBox"  v-if="showEdit">
					<editor 
					id="editor" 
					class="ql-container" 
					placeholder="请开始编辑" 
					:read-only="!isEditing" 
					@input="getEditText"></editor>
					<view 
					class="addBtn" 
					@tap="toEdit" 
					v-if="!showEdit">立即编辑</view>
				<view 
				class="addBtn" 
				@tap="saveEditText" 
				v-if="showEdit && !isEdit">保存</view>
 </view>
 </template>
 <script>
import common from '../../common/common.js';
export default {
	data() {
		return {
			// 展示编辑按钮
			showEdit: false,
			// 展示编辑文字
			isEdit: false,
			// 课程介绍
			introduceText: '',
			// 是否可编辑
			isEditing: false,
			introFlag:'' //判断介绍是否为空
 		 }
	},
	onShow() {
		this.updatePageInfo()
	},
	methods: {
	// 编辑
		toEdit() {
			this.showEdit = true;
			this.isEdit = false;
			this.isEditing = true;
		},
		// 获取编辑的文本
		getEditText(e) {
			// console.log(e.detail.text);
			this.introFlag = e.detail.text;
			this.introduceText = e.detail.html;
		},
		saveEditText() {
		//  这样判断好像有点问题，勉强先用这个
			// console.log(this.introduceText == '<p><br></p>')
			if (this.introFlag == '\n') {
				this.introduceText =''
			}
			let data = {introduce:this.introduceText}
			this.updataCourseInfo(data)
		},
			// 更新新课程信息 
		updataCourseInfo(data) {
			let {course_id,course_name}= this.courseObj
			let reqData ={course_id,cname:course_name,...data}
			common.request('/Service.Course/edit',reqData,'POST',true).then(
				(res) => {
					console.log(res)
					this.updatePageInfo()
				}
			)
		},
			// 更新页面
		updatePageInfo(){
			let {gm_id} = uni.getStorageSync('userInfo')
			let data = { pai_id: this.pai_id,gm_id };
			let p = new Promise((resolve, reject) => {
			   common.request('/Service.Pai/view', data, 'GET', true).then(res => {
			   	this.courseObj = res.data;
				this.user_list = res.data.user_list
			   	this.coachLabelArr =  this.courseObj.coach_label.split(",")
			   	this.introduceText = res.data.introduce
				if(this.courseObj.course_imgarr){
				this.imgList = this.courseObj.course_imgarr.split("|")
				}
				if(this.courseObj.course_imgarr=="") {
					this.imgList=[]
				}
				if (this.imgList.length>0) {
					this.showImage = true
					this.allImgTNum = this.imgList.length
				}
				if(this.imgList.length==0) {
					this.showImage = false
					this.allImgTNum = 0
				}
			   	if(this.introduceText!='') {
			   		this.isEdit = true
			   		this.showEdit = true
			   	}
				if(this.introduceText=='') {
					this.showEdit = false;
					this.isEdit = false;
				}
				this.isEditing = false
				resolve(res.data.introduce);
			   });
			})
			
			p.then((data)=> {
				//console.log(data,113)
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
					this.editorCtx.setContents({
						html:data
					})
					this.editorCtx.format('textIndent', '2em') // 首行缩进两字符
				}).exec()
			})
			
		},
	}
}
</script>
<style lang="less" scoped>
	.courseIntroduce {
		width: 690rpx;
		min-height: 242rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 16rpx;
		overflow: hidden;
		.navBar {
			margin-top: 30rpx;
			padding: 0 30rpx;
			height: 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
			.more {
				font-size: 24rpx;
			}
		}
	}
	.addBtn {
		margin: 60rpx auto 30rpx;
		width: 240rpx;
		min-height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		background: rgba(21, 150, 240, 1);
		border-radius: 30rpx;
		font-size: 30rpx;
		color: rgba(255, 255, 255, 1);
	}
	.editBox  {
	margin-top: 50rpx;
	margin-left: 30rpx;
	margin-right: 30rpx
}
</style>
