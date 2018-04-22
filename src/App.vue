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
		-webkit-tap-highlight-color:rgba(0,0,0,0);
	}
	.el-message {
		top: 36%;
		min-width: 3.0rem;
	}
	.commit {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 140px;
		background: #fff;
		box-sizing: border-box;
		padding: 30px 50px;
		button{
			width: 100%;
			height: 100%;
			background: #4e5d8c;
			font-size: 28px;
			color: #fff;
			letter-spacing: 2px;
		}
	}
</style>