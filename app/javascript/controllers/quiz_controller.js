import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["radioButton"]

    connect() {
        console.log("Hello, Stimulus!", this.element)
      }                                                                                                  
    addQuestion() {

        const collection = document.querySelectorAll(".create_question_form:last-child")[0].cloneNode(true);

        const lastInput = collection.querySelector('input').id;
         //const lastSelect = collection.querySelector('select').id;
        const slug = lastInput.split('attributes_').pop()[0];
       
        const newId = parseInt(slug, 10) + 1;
        const newName =  `quiz[questions_attributes][${newId}]`


        collection.id = `create_question_${newId}`;
    
        collection.querySelector('input').id = lastInput.replace(slug, newId);
        collection.querySelector('input').value =  "";
        collection.querySelector('input').setAttribute('name', `${newName}[name]`);

        collection.querySelector('fieldset').id =`fieldset-${newId}`;

        const nodeList= collection.querySelector('fieldset').querySelectorAll("input");
        //nodeList.forEach(
        //    element => 
        //    element.name =  `radio-${newId}`,
        //    element.id = `${nodeList[0].id}-${newId}`
        //);
        nodeList.forEach(
            element => element.name =  `radio-button-${newId}`,
            //console.log(element.id)
        );
        nodeList.forEach(
            element => element.id =  `${element.id }_${newId}`
            //console.log(element.id)
        );
         // nodeList[0].name = `radio-${newId}`; 
         // nodeList[0].id = `${nodeList[0].id}-${newId}`;

        // collection.querySelector('select').id = lastSelect.replace(slug, newId);
        //collection.querySelector('select').value =  "0";
        //collection.querySelector('select').setAttribute('name', `${newName}[description]`);
        const nodeListOptions = collection.querySelectorAll(".create-options");
        nodeListOptions.forEach(
            element =>  
            element.classList.add("hide")
            //  element.parentNode.removeChild(element)
        );
        nodeListOptions.forEach(
            element =>  
            console.log(element)
        );
        for (let i = 0; i < nodeListOptions.length; i++) {
            nodeListOptions[i].id=  `quiz_questions_attributes_${newId}_options_attributes_${i}_label`;
        }

        document.getElementById("question_form").appendChild(collection);

    }
    selectType(event) {
        event.stopImmediatePropagation()
        const parentWithClass = event.path[0].closest('.create_question_form');
        const nodeList = parentWithClass.querySelectorAll(".create-options");
        if(event.path[0].value==1  || event.path[0].value==2  ) {
            nodeList.forEach(
                element =>  
                element.classList.remove("hide")
            );
        }else {
            nodeList.forEach(
                element =>  
                element.classList.add("hide")
            );
        }

    }
}
 
