<template>
    <div class="row">
        <form >
            <div class="form-group">
                <label>Email Address</label>
                <input id="email"  placeholder= "Enter Email" type="email" class="form-control">
            </div>
             <div class="form-group">
                <label>Password</label>
                <input id="password"  placeholder= "Enter Password" type="password" class="form-control">
            </div>

            <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
            <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
        </form>
    </div>
</template>

<script>
import Firebase from 'firebase'


export default {
    methods: {
        signIn(){
            var email = document.getElementById('email').value
            var password = document.getElementById('password').value

            Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                if(errorCode == 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(errorMessage)
                } 
                
            }

            )   },
        signOut() {
            Firebase.auth().signOut().then(function() {
                alert('Logged out')
            }).catch(function(error) {
                alert('error')
            })
        }
    }
}
</script>