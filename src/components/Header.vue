<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/"> piizzaa</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/"><a href="" class="nav-link">home</a></router-link>
                </li>
                <li class="nav-item">                    
                    <router-link to="/menu"><a href="" class="nav-link">menu</a></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }

</style>