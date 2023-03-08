

function selectPlan (planNumber){
    let plany = document.querySelector('.plan');
    plany.classList.remove('plan--selected');
    
    let vybrany = document.querySelector('#plan'+String(planNumber));
    vybrany.classList.add('plan--selected');
}