<script>
	//export let name;

	// router
	import { Router, Link, Route } from "svelte-routing";

	// pages
	import Gallery from "./pages/Gallery.svelte";
	import GalleryRegister from "./pages/GalleryRegister.svelte";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tube from "./components/Tube.svelte";
</script>

<Router>
	<Header />
	<Route path="/" component={Gallery} />
	<Route path="/register" component={GalleryRegister} />
	<Route path="/tube" component={Tube} />
	<Footer />
</Router>

<style lang="postcss" global>
	@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
