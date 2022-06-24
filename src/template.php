<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8">
		<title id="title">Wollinger.io</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="icon" href="img/favicon.webp"/>
	</head>

	<body>
		<div class="container">
			<div class="content">
				<img class="spin360" id="userPhoto" src="img/avatar.webp" onclick="rotateUserPhoto()">
				
				<h1 id="userName">@SvenWollinger</h1>
				<p id="about">22 he/him 🇩🇪</p>
				<div style="width:50%;">
						<div id="navContact" class="navButton selected" onclick="navClick('contact')"><img class="icon-f-email selected"></div>
						<div id="navProjects" class="navButton" onclick="navClick('projects')"><img class="icon-f-puzzle"></div>
						<div id="navHobbys" class="navButton" onclick="navClick('hobbys')"><img class="icon-f-heart"></div>
						<!--<div id="navPets" class="navButton" onclick="navClick('pets')"><img class="icon-f-animal"></div>-->
				</div>
				<div id="links">
					<div id="pageContact">
						<a class="link" href="https://github.com/SvenWollinger" target="_blank">
							<div class="linkDiv">
								<img class="icon-github">
								<span>GitHub</span>
							</div>
						</a>
						<a class="link" href="javascript:mailButton()">
							<div class="linkDiv">
								<img class="icon-mail">
								<span id="mailCopyText">E-Mail</span>
							</div>
						</a>
						<a class="link" href="https://instagram.com/SvenWollinger" target="_blank">
							<div class="linkDiv">
								<img class="icon-instagram">
								<span>Instagram</span>
							</div>
						</a>
						<a class="link" href="https://twitter.com/SvenWollinger" target="_blank">
							<div class="linkDiv">
								<img class="icon-twitter">
								<span>Twitter</span>
							</div>
						</a>
						<a class="link" href="javascript:discordButton()">
							<div class="linkDiv">
								<img class="icon-discord">
								<span id="discordCopyText">Discord</span>
							</div>
						</a>
					</div>
					<div id="pageProjects" style="display:none;">
						<h3 class="projectTypeTitle">Private projects</h3>
						<a class="link" href="https://github.com/SvenWollinger/HKManager" target="_blank">
							<div class="linkDiv">
								<img src="/img/hkmanager.webp">
								<span>HKManager</span>
							</div>
						</a>
						<h3 class="projectTypeTitle">CaptureCoop</h3>
						<a class="link" href="https://github.com/CaptureCoop/SnipSniper" target="_blank">
							<div class="linkDiv">
								<img src="/img/snipsniper.webp">
								<span>SnipSniper</span>
							</div>
						</a>
						<a class="link" href="https://json-cl.capturecoop.org" target="_blank">
							<div class="linkDiv">
								<img src="/img/capturecoop.webp">
								<span>JSON-CL</span>
							</div>
						</a>
						<a class="link" href="https://github.com/CaptureCoop/CCLogger" target="_blank">
							<div class="linkDiv">
								<img src="/img/capturecoop.webp">
								<span>CCLogger</span>
							</div>
						</a>
						<a class="link" href="https://github.com/CaptureCoop/CCColorUtils" target="_blank">
							<div class="linkDiv">
								<img src="/img/capturecoop.webp">
								<span>CCColorUtils</span>
							</div>
						</a>
						<a class="link" href="https://github.com/CaptureCoop/CCUpdater" target="_blank">
							<div class="linkDiv">
								<img src="/img/ccupdater.webp">
								<span>CCUpdater</span>
							</div>
						</a>
						<h3 class="projectTypeTitle">Minecraft Plugins</h3>
						<a class="link" href="https://github.com/MischiefSMP/MischiefCore/" target="_blank">
							<div class="linkDiv">
								<img src="/img/minecraft.webp">
								<span>MischiefCore</span>
							</div>
						</a>
						<a class="link" href="https://github.com/MischiefSMP/MischiefStats/" target="_blank">
							<div class="linkDiv">
								<img src="/img/minecraft.webp">
								<span>MischiefStats</span>
							</div>
						</a>
						<a class="link" href="https://github.com/MischiefSMP/MischiefPerms/" target="_blank">
							<div class="linkDiv">
								<img src="/img/minecraft.webp">
								<span>MischiefPerms</span>
							</div>
						</a>
					</div>
					<div id="pageHobbys" style="display:none;">
						<div class="link">
							<div class="linkDiv">
								<img src="/img/rubiks.webp">
								<span>3x3x3 Average: 45s</span>
							</div>
						</div>
						<h4>Adding more soon.</h4>
					</div>
				</div>

				<footer>Based on <a href="https://github.com/MichaelBarney/LinkFree/tree/master/Templates/mnmlsm" target="_blank">LinkFree</a> | Icons by <a href="https://icons8.de" target="_blank">Icons8</a> | <a href="https://github.com/SvenWollinger/wollinger.io" target="_blank">Source Code</a></footer>
			</div>
		</div>
	</body>
	<script src="/js/utils.js"></script>
	<script src="/js/main.js"></script>
	<script src="/js/rats.js"></script> 
</html>