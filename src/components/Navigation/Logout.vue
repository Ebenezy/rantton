<template>
<header class="container-fluid nav-top" slot="head">
			<div class="container nav">
				<router-link :to="{name: 'welcome'}"><img src="../../assets/img/rantton_logo.png" class="logo"> </router-link>
				<ul class="nav-bar">
					
					<li><router-link :to="{name: 'welcome'}">  <button class="rant-btn" style="font-size: 15px; margin: 0;">Logout</button></router-link></li>
					<li><a href=""><i class="fa fa-bell"></i></a> </li>
					<li class="emojiss"><a href=""><img src="https://twemoji.maxcdn.com/2/72x72/1f620.png" class="menu-icon"> </a></li>
				</ul>
			</div>
</header>
</template>

 <script>

    export default {
        name: "TrendIcon",

		// method:{
		// 	logout(){
		// 		localStorage.clear();
		// 	}
		// }

    }
</script>