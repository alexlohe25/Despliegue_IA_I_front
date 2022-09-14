<script>
    export let stringID;

    function getValue( event ){
        console.log( event.target.value );
    }
</script>


<input id="txtInput" bind:value={stringID} type="text" placeholder="customer id" on:input={ (e) => getValue(e) }>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,600;1,700&display=swap');

#txtInput{
    height: 50px;
    width: 89%;
    padding: 3px;
    font-family: 'Montserrat', sans-serif;
    color: #595353;
    font-weight: 600;
    font-size: 15px;
    border-radius: 5px;
    border-style: none;
    margin-top: 10px;
}


</style>