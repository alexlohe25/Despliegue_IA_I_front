<script>
  import svelteLogo from './assets/svelte.svg'
  import TextBox from './lib/TextBox.svelte';
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
            <p> Select a customer: </p>
          </div>
          <div class="input-component-container">
              <TextBox/>
            <button id="btn-random" >
              <i class="material-icons" style="font-size: 35px;" id="btn-dice">casino</i>
            </button>
          </div>
        </div>
        <div class="buton-container">
          <button id="btn-predict">
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

</style>
