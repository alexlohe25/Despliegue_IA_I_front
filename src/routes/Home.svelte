<script>

    import { push } from "svelte-spa-router"
    import css from './../styles/Home.css'

    let idRandom = "";
    function getValue( event ){
      idRandom = event.target.value

    }
    
    let data = {
      randomId: ""
    };

    async function getRandomId(){
      const response = await fetch('http://ec2-44-209-10-17.compute-1.amazonaws.com:8080/random_customer');
      const idRandomFetch = await response.json();
      data = {
        randomId: idRandomFetch.randomCustomer,
      } 
      idRandom = data.randomId;
    }

    const go_to = () => {
        push("/Results/"+idRandom);
    }
</script>

<main>
    <div class="container-general">
        <div class="container-above">
          <div class="card-general-container">
    
            <div class="title">
              <h1> American Express Customer Default Prediction </h1>
            </div>
    
            <div class="input-section">
              <div class="subtitle-input-section">
                <p> Introduce an ID: </p>
              </div>
              <div class="input-component-container">
                  <input id="txtInput" bind:value={idRandom} type="text" placeholder="customer id" on:input={ (e) => getValue(e) }>
                <button id="btn-random" on:click={ getRandomId }>
                  <i class="material-icons" style="font-size: 35px;" id="btn-dice">casino</i>
                </button>
              </div>
            </div>
            <div class="buton-container">
              <button  on:click={ go_to } id="btn-predict">
                  <div class="containe-btn-predict">
    
                  Predict
                  <i class="material-icons" style="font-size: 45px;"> pages </i>
                </div>
    
              </button>
            </div>
          </div>
        </div>
        <div class="container-footer">
          <p>
            Model: Neural network with 3 hiden layers from Scikit-learn MLP Model using ReLu as activaction function and Adam algorithm as solver.
          </p>
          <p>
            Dataset from: 
            <a href="https://www.kaggle.com/competitions/amex-default-prediction/overview"
              id="link-to-kaggle">
              https://www.kaggle.com/competitions/amex-default-prediction/overview
            </a> 
          </p>
        </div>
      </div>
</main>

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