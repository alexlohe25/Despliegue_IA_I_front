<script>

    import css from './../styles/Results.css'

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
                        <p> 00000469ba478561f23a92a868bd366de6f6527a684c9a2e78fb8 </p>
                    </div>
                    <div class="state-results">
                        <div class="state-results-tick">  </div>
                        <p> Approved </p>

                    </div>
                </div>
            </div>

            <div class="show-results-section">
                <div class="show-results-title">
                    <p> Customer Data Summary </p>
                </div>
                <div class="show-results-summary-table">
                    <table class="show-results-table">
                        <thead class="show-results-table-head">
                            <tr>
                                <th>B_1</th>
                                <th>B_2</th>
                                <th>B_3</th>
                                <th>B_4</th>
                                <th>B_5</th>
                                <th>B_6</th>
                                <th>B_7</th>
                                <th>B_8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>
                                <td class="show-results-table-body-td">0.11</td>

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