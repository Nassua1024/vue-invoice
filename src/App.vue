<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	body, html {
		height: 100%;
	}
	#app {
		height: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	.el-message {
		top: 36%;
		min-width: 3.0rem;
	}
	.commit {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 140px;
		background: #f5f5f5;
		box-sizing: border-box;
		padding: 30px 50px;
		z-index: 99;
		button {
			width: 100%;
			height: 100%;
			background: #3a8ee6;
			font-size: 28px;
			color: #fff;
			letter-spacing: 2px;
		}
	}
	.el-button:focus {
		background: #3a8ee6;
		border-color: #3a8ee6;
		color: #fff;
	}
	.pick-mark {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, .4);
		z-index: 999;
		.btn-box {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 180px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 40px;
			padding: 0 20px;
			font-size: 14px;
			background: #fff;
			.btn-cancel {
				color: #55f;
			}
			.btn-sure {
				color: #e5004d;
			}
		}
		.select {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
		}
		.picker-items {
			background: #eee;
			.picker-slot {
				font-size: 14px;
			}
			.picker-item {
				&.picker-selected {
					color: #535353;
				}
			}
			.picker-center-highlight {
				&:after, &:before {
					background: #fff;
				}
			}
		}
	}
</style>