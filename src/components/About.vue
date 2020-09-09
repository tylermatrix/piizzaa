<template>
    <div>
        <p>Click on the links below for more info:</p>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav">
                <router-link tag="li" :to="{name: 'historyLink'}"><a class="nav-link">our history</a></router-link>
                <router-link tag="li" :to=" {name: 'contactLink'}"><a class="nav-link">contact us</a></router-link>
                <router-link tag="li" :to="{name: 'orderingGuideLink'}"><a class="nav-link">ordering</a></router-link>
                <router-link tag="li" :to="{name: 'deliveryLink'}"><a class="nav-link">delivery</a></router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>