<script>
    
    import { BarLoader, Wave } from 'svelte-loading-spinners'
    import { onMount } from 'svelte';
    import css from './../styles/Results.css'
    export let params = {};

    let arrayResult = [];
    let loading = true;

    onMount(async () => {
        fetch(`http://ec2-44-209-10-17.compute-1.amazonaws.com:8080/id/${params.id}`)
        .then(response => response.json())
        .then(data => {
            arrayResult = data;
            loading = false;
            console.log("Target_calculated: "+arrayResult['target_calculated'])
            console.log("Original target: "+arrayResult['target'])
        }).catch(error => {
            console.log(error);
            return [];
        });
    });
</script>

<main>

    <div class="container-general">
        <div class="container-above">
          <div class="card-general-container-results">

            <div class="title">

              <h1> American Express Customer Default Prediction </h1>

            </div>

            <div class="results-section">
                <div class="rectangle-results">
                    <div class="subtitle-rectangle-results">
                        <h3> Customer Credit Card Status </h3>
                    </div>
                    <div class="icon-results">
                        <i id="icon_user" class="material-icons">account_circle</i>
                    </div>
                    <div class="test-id-results">
                        <p> {params.id} </p>
                    </div>
                    <div class="state-results">

                        { #if arrayResult['target_calculated'] == 1 }
                            <div class="state-results-tick">  </div>
                            <p> Approved </p>
                        {/if }

                        {#if arrayResult['target_calculated'] == 0 }
                            <div class="state-results-cross">  </div>
                            <p> Denied </p>
                        {/if}

                        { #if loading != false}
                            <BarLoader size="200" color="#3054C5"></BarLoader>
                            
                        {/if }

                       

                    </div>
                </div>
            </div>

            <div class="show-results-section">
                <div class="show-results-title">
                    <p> Customer Data Summary </p>
                </div>
                <div class={ `show-results-summary-${ (loading != true)?'table':'' }` }>
                    { #if loading != false}
                    <Wave size="100" color="#EB5027"></Wave>
                    {/if }
                    <table class="show-results-table">
                        <thead class="show-results-table-head">
                            <tr>
                                { #if loading != true}
                                    {#each arrayResult['columns'] as columnm, index }
                                        <th> col_{index +1} </th>
                                    {/each}
                                {/if }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {#if loading != true}
                                    {#each arrayResult['data'] as data }
                                        
                                        <td class="show-results-table-body-td">{ Number(data).toFixed(4) }</td>

                                    {/each}
                                    
                                {/if}
                                

                            </tr>
                        </tbody>
                    </table>
                </div>
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