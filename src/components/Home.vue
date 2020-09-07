<template>
    <div class="row">
        <div class="col-sm-12 text-center" id="home">
            <div class="background">
                <h1>Welcome to piizzaa</h1>
                <h2>Feeling Hungry?</h2>
                <button class="btn btn-success">Let's Order!</button>
            </div>
        </div>
    </div>
</template>


<style>
    #home {
        background: url('../../src/assets/pep-pizza.jpg');
        height: 800px;
        padding: 10%;
    }

    h1, h2 {
        margin: 6%;
    }

    .background {
        background: #eee;
        opacity: 0.8;
        max-width: 60%;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>