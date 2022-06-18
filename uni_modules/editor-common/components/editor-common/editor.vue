<template>
	<view class="editor-warp">
		<!-- 头部 -->
		
		<!-- 内容 -->
		<view class="editor-content">
			<scroll-view scroll-y="true" style="width: 100%;">
				<editor ref="editorRef" id="editor" @ready="onEditorReady" :placeholder="placeholder" style="width: 100%;height: 50vh;" @tap="focusFn" @blur="blurFn" @input="editorInputFn"></editor>
			</scroll-view>
			<view class="editeor_length">
				已输入{{editeorLength}}字
			</view>
		</view>
		<!-- 工具 -->
		<view class="editor-tool">
			<!-- 菜单栏 -->
			<view class="editor-tool_ul faj">
				<view class="editor-tool_li" v-for="item in editorBtnList" :key="item.id" @tap="editorBtnFn(item)">
					<text class="iconfont" :class="{'fontColor': (item.check)}">{{item.value}}</text>
				</view>
				<view class="editor-tool_li">
					<text class="editor-tool_revoke iconfont icon-chexiao" @tap="revokeFn"></text>
					<text class="editor-tool_forwarp iconfont icon-chexiao" @tap="forwarpFn"></text>
				</view>
			</view>
			<!-- 内容 -->
			<view class="editor-ul_ctool">
				<scroll-view scroll-y="true" class="scrollClassTwo" :class="isSelectBtn !== null && 'scrollClass'" >
					<FontSizec v-show="isSelectBtn==0" 
					:editorCtx="editorCtx"
					ref="fontSizecRef"
					></FontSizec>
					<Titlep v-if="isSelectBtn==1" 
					@headerListFn_emit="headerListFn_emit"
					@pUllistFn_emit="pUllistFn_emit"
					></Titlep>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import FontSizec from './editorc/fontsizec.vue'
	import Titlep from './editorc/titlep.vue'
	export default {
		components:{FontSizec, Titlep},
		props: {
			placeholder: {
				type: String,
				default: '请输入文章内容，不少于100字'
			}
		},
		name:"editor",
		data() {
			return {
				editorCtx: null,
				editorBtnList: [
					{id: 0, value: 'Aa', check: false},
					{id: 1, value: 'T', check: false},
				],
				isSelectBtn: null, //底部状态栏目选中切换
				isReadOnly: false,
				editeorLength: 0,
				setTime: null
			};
		},
		methods: {
			/* editor  区域 */
			onEditorReady() {
				uni.createSelectorQuery().in(this).select('#editor').context((res) => {
					this.editorCtx = res.context;
				}).exec();
			},
			saveValidationFn () {
				let that = this
				this.editorCtx.getContents({
					// success: function (res) {
					// 	that.$emit('saveValidation', res)
					// },
					complete: function (res) {
						that.$emit('saveValidation', res)
					},
				})
				
			},
			setValidationFn (html) {
				let that = this
				this.editorCtx.setContents({
					html,
					success: function (res) {
						that.editorCtx.getContents({
							success: function (res) {
								that.editeorLength = res.text.replace('\n', '').length
							},
						})
					},
					complete: function (res) {
						console.log(res)
					}
				})
			},
			// 栏目
			editorBtnFn (item) {
				// 修改选中颜色
				this.$refs.editorRef.$el.focus()
				this.editorBtnList.forEach(L=>{
					if (L.id == item.id) {
						item.check = !item.check
						if (!item.check) {
							setTimeout(()=>{
								this.isSelectBtn = null
							}, 100)	
						} else {
							setTimeout(()=>{
								this.isSelectBtn = item.id	
							}, 100)	
						}
					} else {
						L.check = false
					}
				})
				
			},
			focusFn (e) {
				if (this.isSelectBtn !==null) {
					// if(this.isSelectBtn===0) {
					// 	let dom = this.$refs.fontSizecRef,
					// 	styleList = dom.styleList;
					// 	if (styleList.length>0) {
					// 		styleList.forEach(L=>{
					// 			if(L.value){
					// 				this.editorCtx.format(L.name, L.value)
					// 			} else {
					// 				this.editorCtx.format(L.name)
					// 			}
					// 		})
					// 	}
					// }
					this.isSelectBtn = null
					this.editorBtnList.forEach(L=>{
						L.check = false
					})
					this.$refs.fontSizecRef.styleList = []
				}
			},
			blurFn () {
				// this.isSelectBtn = null
				// this.editorBtnList.forEach(L=>{
				// 	L.check = false
				// })
				// this.$refs.fontSizecRef.styleList = []
			},
			onClickFn(e) {
			  document.activeElement.blur()
			  requestAnimationFrame(function(){
			  	document.activeElement.blur() // 失去焦点
			  })
			},
			clearfontFn () {
				let fontList = this.$refs.fontSizecRef.fontList 
				fontList.forEach(L=>{
					L.check = false
				})
			},
			headerListFn_emit (val) {
				this.editorCtx.format(val.name, val.value)
				this.onClickFn()
			},
			pUllistFn_emit (val) {
				this.editorCtx.format(val.name, val.value)
				this.onClickFn()
			},
			revokeFn () {
				this.editorCtx.undo()
				this.onClickFn()
			},
			forwarpFn () {
				this.editorCtx.redo()
				this.onClickFn()
			},
			editorInputFn (event) {
				let str = event.detail.text.replace('\n', '')
				if (this.setTime) {
					clearTimeout(this.setTime)
				}
				this.setTime = setTimeout(()=>{
					this.editeorLength = str.length || 0
				},500)
			}
		}
	}
</script>

<style>
</style>
