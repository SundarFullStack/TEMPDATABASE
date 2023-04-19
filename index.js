    //Responsive Form

    //Element creator

    function create_element(tagName, attriName, attrriValue) {
        
        let element = document.createElement(tagName);

        element.setAttribute(attriName, attrriValue);

        return element;
        
    }

    //Label Creation

    function create_label(tagName, attriName, attrriValue, content) {
        
        let label = document.createElement(tagName);

        label.setAttribute(attriName, attrriValue);
        
        label.textContent = content;

        return label;
        

}
    
//table creator

function create_table(tagName,content) {
    
    let table = document.createElement(tagName);

    table.innerText = content;

    return table;

}


    //Input Creator text


    function create_input(tagName, typeProp, typeValue,className,classValue,valuename,Value) {
        
        let input = document.createElement(tagName);

        input.setAttribute(typeProp, typeValue);

        input.setAttribute(className, classValue);

        input.setAttribute(valuename, Value);

        return input;
        

}
    
//create input radio and checkbox

function create_input_check(tagName, typeProp, typeValue,className,classValue,valuename,Value) {
        
    let input = document.createElement(tagName);

    input.setAttribute(typeProp, typeValue);

    input.setAttribute(className, classValue);


    input.setAttribute(valuename, Value);

    return input;
    

}

//Output capturing function

function data_mapping() {

    //Firstname

    trd1.innerText = firstName_input.value;
    
    //Secondname

    trd2.innerText = secondName_input.value;

    //Address

    trd3.innerText = addressLine1_input.value +''+ addressLine2_input.value;

    //Pincode

    trd4.innerText = pincode_input.value;

    //Gender


    if (male_input.checked) {

        trd5.innerText = male_input.value;
    }
    else if (female_input.checked) {
        
        trd5.innerText = female_input.value;
    }

    //Food

    let element = [nif_input, sif_input, Chinese_input, Japanese_input, American_input];

    let result = [];

    for (let i = 0; i < element.length; i++){

        if (element[i].checked) {
            
            result.push(element[i].value);
        }


    }

    trd6.innerText=result.join(',');
 
    //State

    trd7.innerText = state_select.value;

    //Country

    trd8.innerText = country_select.value;
    

}

//clear function

function data_clear() {
    
     //Firstname

     firstName_input.value = ' ';
    
     //Secondname
 
     secondName_input.value= ' ';
 
     //Address
 
    addressLine1_input.value = ' ';

    addressLine2_input.value = ' ';
 
     //Pincode
 
     pincode_input.value = ' ';
 
     //Gender
    
    male_input.checked=false;

    female_input.checked=false;

    //Food

    let element = [nif_input, sif_input, Chinese_input, Japanese_input, American_input];


    for (let i = 0; i < element.length; i++){
            
            element[i].checked=false;
            
    }
    
    //State

    state_select.value = ' ';

    //country

    country_select.value = ' ';



}
    


    //Body Creation

    let container = create_element('div', 'class', 'container');

    let row1 = create_element('div', 'class', 'row');

    let row2 = create_element('div', 'class', 'row');



    //Form Creation

    let form_div = create_element('div', 'class', 'col-lg-3 col-md-12 col-sm-12 col-xs-12 form_div justify-content-center');

    let form_header = create_element('h4', 'class', 'col-3 text-left mt-5');

    form_header.innerText = 'Form Submission:';

    let form = document.createElement('form');



    //Firstname row

    let form_row1 = create_element('div', 'class', 'form-group row');

    let firstName_label = create_label('label', 'for', 'firstname','First Name:');

let firstName_input = create_input('input', 'type', 'text', 'class', 'form-control','value','');
    
firstName_input.setAttribute( 'placeholder', 'First Name')
    
   

    //secondname row 

    let form_row2 = create_element('div', 'class', 'form-group row');

    let secondName_label = create_label('label', 'for', 'secondname','Second Name:');

let secondName_input = create_input('input', 'type', 'text', 'class', 'form-control','value','');
    
secondName_input.setAttribute( 'placeholder', 'Second Name')



    //AddressLine1 row

    let form_row3 = create_element('div', 'class', 'form-group row');

    let addressLine1_label = create_label('label', 'for', 'AddressLine1','Address Line 1:');

let addressLine1_input = create_input('input', 'type', 'text', 'class', 'form-control','value','');
    
addressLine1_input.setAttribute('placeholder', 'Apartment, studio, or floor');



    //AddressLine2 row

    let form_row4 = create_element('div', 'class', 'form-group row');

    let addressLine2_label = create_label('label', 'for', 'AddressLine2','Address Line 2:');

let addressLine2_input = create_input('input', 'type', 'text', 'class', 'form-control','value','');
    
addressLine2_input.setAttribute('placeholder', 'Apartment, studio, or floor');


    //Password row

    let form_row5 = create_element('div', 'class', 'form-group row');

    let pincode_label = create_label('label', 'for', 'pin','Pincode:');

let pincode_input = create_input('input', 'type', 'text', 'class', 'form-control', 'placeholder', 'Pincode');
    

    //Gender

    let form_row6 = create_element('div', 'class', 'form-group row');

    let form_row7 = create_element('div', 'class', 'form-group row');

    let Gender = create_label('label', 'for', 'Gender','Gender :');

    let male_input = create_input_check('input', 'type', 'radio', 'name', 'gender_selection', 'value', 'Male');

    male_input.setAttribute('class', 'ml-3');

    let male_label = create_label('label', 'for', 'form_male_check', 'Male');

    let female_input = create_input_check('input', 'type', 'radio', 'name', 'gender_selection',  'value', 'Female');

    female_input.setAttribute('class', 'ml-3');

    let female_label = create_label('label', 'for', 'feform_male_check', 'Female');


    //Food Choice

    let form_row8 = create_element('div', 'class', 'form-group row');

    let small = create_label('small', 'class', 'food-label', '(must choose atleast 2 outof 5)');

    let food_label = create_label('label', 'for', 'food', `Choice Of Food:${small.textContent}`);
    

    //food 1[North Indian]

    let nif_div = create_element('div', 'class', 'form-check');

    let nif_input = create_input_check('input', 'class', 'form-check-input', 'value', 'North Indian', 'type', 'checkbox');
    
    nif_input.setAttribute('name','food');

    let nif_label = create_label('label', 'for', 'north_indian', 'North Indian');

    //food 2[South Indian]

    let sif_div = create_element('div', 'class', 'form-check');

    let sif_input = create_input_check('input', 'class', 'form-check-input', 'value', 'South Indian', 'type', 'checkbox');

    sif_input.setAttribute('name','food');

    let sif_label = create_label('label', 'for', 'south_indian', 'South Indian');

    //food 3[Chinese]

    let Chinese_div = create_element('div', 'class', 'form-check');

    let Chinese_input = create_input_check('input', 'class', 'form-check-input', 'value', 'Chinese', 'type', 'checkbox');
    
    Chinese_input.setAttribute('name','food');

    let Chinese_label = create_label('label', 'for', 'Chinese', 'Chinese');

    //food 4[Japanese]

    let Japanese_div = create_element('div', 'class', 'form-check');

    let Japanese_input = create_input_check('input', 'class', 'form-check-input', 'value', 'Japanese', 'type', 'checkbox');
    
    Japanese_input.setAttribute('name','food');

    let Japanese_label = create_label('label', 'for', 'Japanese', 'Japanese');

    //food 5[American]

    let American_div = create_element('div', 'class', 'form-check');

    let American_input = create_input_check('input', 'class', 'form-check-input', 'value', 'American', 'type', 'checkbox');
    
    American_input.setAttribute('name','food');

    let American_label = create_label('label', 'for', 'American', 'American');


    //State Selection

    let form_row9 = create_element('div', 'class', 'form-group row mt-4');

    let state_label = create_label('label', 'for', 'states', 'Choose your state : ');

    let state_select = create_element('select', 'name', 'states');
    
     let state_options = create_label('option', 'value', '', '');


    let state_option1 = create_label('option', 'value', 'Tamil Nadu', 'Tamil Nadu');

    let state_option2 = create_label('option', 'value', 'Karnataka', 'Karnataka');

    let state_option3 = create_label('option', 'value', 'Andhra Pradesh', 'Andhra Pradesh');

    let state_option4 = create_label('option', 'value', 'Telangana', 'Telangana');

    let state_option5 = create_label('option', 'value', 'Goa', 'Goa');

    let state_option6= create_label('option', 'value', 'Maharashtra', 'Maharashtra');

    let state_option7= create_label('option', 'value', 'Gujarat', 'Gujarat');

    let state_option8 = create_label('option', 'value', 'Rajasthan', 'Rajasthan');

    let state_option9 = create_label('option', 'value', 'Haryana', 'Haryana');

    let state_option10 = create_label('option', 'value', 'Punjab', 'Punjab');



    //Country Selection

    let form_row10 = create_element('div', 'class', 'form-group row mt-4');

    let country_label = create_label('label', 'for', 'country', 'Choose your country :');


    let country_select = create_element('select', 'name', 'country');
    
    let country_options = create_label('option', 'value', '', '');

    let country_option1 = create_label('option', 'value', 'India', 'India');

    let country_option2 = create_label('option', 'value', 'Thailand', 'Thailand');

    let country_option3 = create_label('option', 'value', 'Sri Lanka', 'Sri Lanka');

    let country_option4 = create_label('option', 'value', 'America', 'America');

    let country_option5 = create_label('option', 'value', 'Jamaica', 'Jamaica');

    let country_option6= create_label('option', 'value', 'Japan', 'Japan');

    let country_option7= create_label('option', 'value', 'Australia', 'Australia');

    let country_option8 = create_label('option', 'value', 'Russia', 'Russia');

    let country_option9 = create_label('option', 'value', 'Zimbabwe', 'Zimbabwe');

    let country_option10 = create_label('option', 'value', 'Bhutan', 'Bhutan');


    //Table Creation
        
let table_div = create_element('div', 'class', 'col-9  justify-content-center');
    
let style_div = create_element('div', 'class', 'main');

let table_header = create_element('h4', 'class', 'text-center');
    
table_header.innerText = 'Temporary Database:';
    
table_header.setAttribute('style', 'margin-top: -35px;');

let table = create_element('table', 'class', 'table');

//thead
    
let table_head = document.createElement('thead');

let trh = create_element('tr','style','background-color:#1cbbb3');

let th1 = create_label('th','scope','col','First Name');

let th2 = create_table('th','Second Name');

let th3 = create_table('th','Address');

let th4 = create_table('th','Pincode');

let th5 = create_table('th','Gender');

let th6 = create_table('th','Food');

let th7 = create_table('th','State');

let th8 = create_table('th','Country');


//tbody

let table_body = document.createElement('tbody');

let tr1 = document.createElement('tr');

let trd1 = create_table('td',' ');

let trd2 = create_table('td', ' ');

let trd3 = create_table('td', ' ');

let trd4 = create_table('td', 'No Data Found');

let trd5 = create_table('td', ' ');

let trd6  = create_table('td', ' ');

let trd7 = create_table('td', ' ');

let trd8 = create_table('td', ' ');

//submit button

let submit = create_label('button', 'class', 'btn btn-success btn-md mb-5 mt-3 text-center', 'Submit');

submit.setAttribute('type','button')

submit.setAttribute('onclick', 'data_mapping()');

//clear button

let clear = create_label('button', 'class', 'btn btn-danger btn-md mb-5 mt-3 ml-3 text-center', 'Clear');

clear.setAttribute('type','button')

clear.setAttribute('onclick', 'data_clear()');


    //append body

    document.body.append(container);

    container.append(row1);

    container.append(row2);



    //append form

    row1.append(form_header);

    row2.append(form_div);

    //firstname

    form_div.append(form);

    form.append(form_row1);

    form_row1.append(firstName_label);

    form_row1.append(firstName_input);

    //secondname

    form.append(form_row2);

    form_row2.append(secondName_label);

    form_row2.append(secondName_input);

    //addressline1

    form.append(form_row3);

    form_row3.append(addressLine1_label);

    form_row3.append(addressLine1_input);

    //addressline2

    form.append(form_row4);

    form_row4.append(addressLine2_label);

    form_row4.append(addressLine2_input);

    //password

    form.append(form_row5);

    form_row5.append(pincode_label);

    form_row5.append(pincode_input);

    // Gender

    form.appendChild(form_row6);

    form_row6.append(Gender);

    form.appendChild(form_row7);

    form_row7.append(male_input);

    form_row7.append(male_label);

    form_row7.append(female_input);

    form_row7.append(female_label);


    //append food selection checkboxes

    form.append(form_row8);

    form_row8.appendChild(food_label);

    form.append(nif_div);//food 1

    nif_div.appendChild(nif_input);

    nif_div.appendChild(nif_label);

    form.append(sif_div); //food 2

    sif_div.appendChild(sif_input);

    sif_div.appendChild(sif_label);

    form.append(Chinese_div); //food 3

    Chinese_div.appendChild(Chinese_input);

    Chinese_div.appendChild(Chinese_label);

    form.append(Japanese_div); //food 4

    Japanese_div.appendChild(Japanese_input);

    Japanese_div.appendChild(Japanese_label);

    form.append(American_div); //food 5

    American_div.appendChild(American_input);

    American_div.appendChild(American_label);



    //append state in form

    form.appendChild(form_row9);

    form_row9.appendChild(state_label);

form_row9.appendChild(state_select);
    
state_select.appendChild(state_options);

    state_select.appendChild(state_option1);

    state_select.appendChild(state_option1);

    state_select.appendChild(state_option2);

    state_select.appendChild(state_option3);

    state_select.appendChild(state_option4);

    state_select.appendChild(state_option5);

    state_select.appendChild(state_option6);

    state_select.appendChild(state_option7);

    state_select.appendChild(state_option8);

    state_select.appendChild(state_option9);

    state_select.appendChild(state_option10);


    //append state in form

    form.appendChild(form_row10);

    form_row10.appendChild(country_label);

form_row10.appendChild(country_select);
    
country_select.appendChild(country_options);

    country_select.appendChild(country_option1);

    country_select.appendChild(country_option1);

    country_select.appendChild(country_option2);

    country_select.appendChild(country_option3);

    country_select.appendChild(country_option4);

    country_select.appendChild(country_option5);

    country_select.appendChild(country_option6);

    country_select.appendChild(country_option7);

    country_select.appendChild(country_option8);

    country_select.appendChild(country_option9);

    country_select.appendChild(country_option10);


    //table append

row2.append(table_div);
    
table_div.append(style_div);

style_div.appendChild(table_header);

style_div.appendChild(table);

table.append(table_head);
    
table_head.append(trh);

trh.append(th1);

trh.append(th2);

trh.append(th3);

trh.append(th4);

trh.append(th5);

trh.append(th6);

trh.append(th7);

trh.append(th8);

//append Body

table.appendChild(table_body);

table_body.append(tr1);

tr1.append(trd1);

tr1.append(trd2);

tr1.append(trd3);

tr1.append(trd4);

tr1.append(trd5);

tr1.append(trd6);

tr1.append(trd7);

tr1.append(trd8);

//append submit button


form.append(submit);

form.append(clear);



















































