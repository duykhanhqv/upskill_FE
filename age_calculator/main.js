const { DateTime } = luxon;

function calculateAge(){
    const birthDateInput = document.getElementById('birthdate').value;
    console.log(birthDateInput);
    
    if(!birthDateInput){
        birthdate.classList.add('error');
        document.querySelector('.input-error').innerText = "Please enter your birth date.";
        return;
    }
    console.log(birthDateInput);
    const birth = DateTime.fromISO(birthDateInput);
    const now = DateTime.now();
    const age = now.diff(birth, ['years', 'months', 'days']).toObject();
    let result = "You are "
    if(age.years > 0 ){
        result = result + Math.floor(age.years) + " years"
    }
    if(age.months > 0 ){
        if(age.years > 0 ){
            result = result + ", "
        }
        result = result + Math.floor(age.months) + " months"
    }
    if(age.days > 0 ){
        if(age.years > 0 || age.months > 0){
            result = result + ", and "
        }
        result = result + Math.floor(age.days) + " days"
    }
    result = result + " old."
    
    document.querySelector('.calculate-result').innerText = result;
    
    
}