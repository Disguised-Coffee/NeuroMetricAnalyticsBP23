//note : cant fetch from json due to security restrictions in browser

let data = {
  "questions": [
    {
      "question": "How old are you?",
      "type": "text"
    },
    {
      "question": "What is your ethnicity?",
      "type": "text"
    },
    {
      "question": "What is your sex?",
      "type": "dropdown",
      "options": ["Male", "Female", "Non-binary"]
    },
    {
      "question": "When were you diagnosed?",
      "type": "text",
    },
    {
      "question": "What treatments have you tried? How effective were they? Did they have any side effects?",
      "type": "text"
    },
    {
      "question": "Are you satisfied with the medical care you received for NMOSD?",
      "type": "radio"
    },
    {
      "question": "On a scale of one through 10 how personalized was the medical care you got?",
      "type": "text"
    },
    {
      "question": "Are there any specific areas that have been significantly impacted by NMOSD?",
      "type": "text"
    },
    {
      "question": "How do you cope with the emotional and psychological aspects of living with NMOSD?",
      "type": "text"
    },
    {
      "question": "How well informed are you about NMOSD?",
      "type": "dropdown",
      "options": ["Very well informed", "Partly informed", "Not well informed"]
    },
    {
      "question": "Have you experienced vision loss or blurry vision due to NMOSD?",
      "type": "dropdown",
      "options": ["No", "Yes, very often", "Yes, occasionally"]
    },
    {
      "question": "Do you suffer from muscle weakness during NMOSD flares? Which muscle groups and for how long?",
      "type": "text" 
    },
    {
      "question": "Have you noticed sensory disturbances such as numbness, tingling, or pins and needles sensation? When and for how long?",
      "type": "text"
    },
    {
      "question": "How often do you experience fatigue related to NMOSD? Does fatigue affect your ability to carry out daily activities?",
      "type": "text"
    },
    {
      "question": "Have you experienced bladder or bowel dysfunction as a result of NMOSD? How does this affect your daily life and quality of life?",
      "type": "text"
    },
    {
      "question": "Do you experience pain during or between NMOSD flares? If yes, where is the pain typically localized and how would you describe its intensity?",
      "type": "text"
    },
    {
      "question": "Have you encountered swallowing difficulties or choking episodes due to NMOSD? How frequently do these issues arise?",
      "type": "dropdown",
      "options": ["No", "Yes, frequently", "Yes, somewhat frequently", "Yes, rarely"]
    },    
    {
      "question": "Have you noticed any speech difficulties related to NMOSD? How often do these speech problems occur, and how severe are they?",
      "type": "text"
    },
    {
      "question": "Do you experience issues with balance and coordination during NMOSD flares?",
      "type": "radio"
    },
    {
      "question": "How does this impact your mobility in daily activities?",
      "type": "text"
    },
    {
      "question": "Have you experienced any cognitive changes such as memory problems and difficulty concentrating?",
      "type": "radio"
    },
    {
      "question": "How frequently do these cognitive symptoms manifest?",
      "type": "dropdown",
      "options": ["n/a", "Very frequently", "Somewhat frequently", "Rarely"]
    },  
  ]
};

class Question {
  constructor(qCont, qType, options) {
    this.qCont = qCont;
    this.qType = qType;
    this.options = options;
  }

  render() {
    const form = document.getElementById("questionForm");
    const div = document.createElement("div");
    div.className = "form-group";

    const label = document.createElement("label");
    label.textContent = this.qCont;
    div.appendChild(label);

    if (this.qType === "radio") {
      const radioGroup = document.createElement("div");
      radioGroup.className = "radio-group";

      const radioYes = document.createElement("input");
      radioYes.type = "radio";
      radioYes.name = "programming";
      radioYes.id = "yes";
      radioYes.value = "Yes";
      radioYes.required = true;

      const labelYes = document.createElement("label");
      labelYes.htmlFor = "yes";
      labelYes.textContent = "Yes";

      const radioNo = document.createElement("input");
      radioNo.type = "radio";
      radioNo.name = "programming";
      radioNo.id = "no";
      radioNo.value = "No";

      const labelNo = document.createElement("label");
      labelNo.htmlFor = "no";
      labelNo.textContent = "No";

      radioGroup.appendChild(radioYes);
      radioGroup.appendChild(labelYes);
      radioGroup.appendChild(radioNo);
      radioGroup.appendChild(labelNo);

      div.appendChild(radioGroup);
    } else if (this.qType === "text") {
      const textInput = document.createElement("input");
      const br = document.createElement("br");
      textInput.type = "text";
      textInput.name = "comment";
      textInput.required = true;

      div.appendChild(br);
      div.appendChild(textInput);
    } else if (this.qType === "dropdown") {
      const dropdown = document.createElement("select");
      dropdown.name = "language";
      dropdown.required = true;

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = "Choose an option";
      dropdown.appendChild(defaultOption);

      // Add options to the dropdown based on the "options" array for this question
      if (this.options && this.options.length > 0) {
        this.options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.textContent = option;
          dropdown.appendChild(optionElement);
        });
      }

      div.appendChild(dropdown);
    }

    form.appendChild(div);
  }

}

function main() {
  const form = document.getElementById("questionForm");

  // Loop through the questions in the data object
  data.questions.forEach((questionData) => {
    const question = new Question(
      questionData.question,
      questionData.type,
      questionData.options // Pass the options array to the constructor
    );
    question.render(); // Render each question
  });
}

// Call the main function to render all the questions
main();



// ~!~ IMPORTANT! as Bootstrap does a weird thing to HTML generated by JS

document.querySelector(".container").style.color = "white";


// text-shadow:
//     1px 2px 2px #6e3df5;
console.log(document.querySelector(".container"))
// class="container"




//dan old notes and code and stuff below

// /*
//   So when we are making the form, we want to be able to pull questions from 
//   a JSON file and generate HTML questions based on that content.

//   Json format:
//     - Question Name
//     - Question sub-text
//     - Question Format (Radio, Dropdown, text-input) 
//     - Options  (Optional) [each must be different per instance]
//     - Short name (optional) [each must be different across all]
// */
// /*
//   Radio Question header
//     '<div class="form-group">\

//         <label> ${QUESTION GOES HERE} </label>\
//         <div class="radio-group">\
//           <input type="radio" name="{QUESTION SHORT NAME GOES HERE}" id="{LOWERCASE OPTION GOES HERE}" value="{OPTION GOES HERE}" required>\
//           <label for="{LOWERCASE OPTION GOES HERE}">{OPTION GOES HERE}</label>\
//           {...This repeats for each question of this type.}
//         </div>\
//       </div>'
// */

// /*

//   Question header
//     '<div class="form-group">\

//         <label> ${QUESTION GOES HERE} </label>\
//         <div class="radio-group">\
//           <input type="radio" name="{QUESTION SHORT NAME GOES HERE}" id="{LOWERCASE OPTION GOES HERE}" value="{OPTION GOES HERE}" required>\
//           <label for="{LOWERCASE OPTION GOES HERE}">{OPTION GOES HERE}</label>\
//           {...This repeats for each question of this type.}
//         </div>\
//       </div>'
// */


// // radioButtonsHeader = '<div class="form-group">\
// //         <label>${name}</label>\
// //         <div class="radio-group">';
// // // for option in options, create a question

// //           <input type="radio" name="${shortName}" id="${options[i].toLowerCase()}" value="${options[i]}" required>\
// //           <label for="${options[i].toLowerCase()}">Yes</label>\
// //           <input type="radio" name="programming" id="no" value="No">\
// //           <label for="no">No</label>\
// // radioButtonBottom = '</div></div>';

// // submit = '<button type="submit">Submit</button>';

// // Questions:
// class Question {
//   constructor(name, subText, format, shortName) {
//     this.name = name;
//     this.subText = subText;
//     this.format = format;
//     this.shortName = shortName;
//   }
//   showHTML() {
//     document.querySelector("form").innerHTML = `This is a ${this.name}`;
//   }
// }

// class RadioQuestion extends Question {
//   constructor(name, subText, format, shortName, options,) {
//     super(name, subText, format, shortName);
//     this.options = options
//   }
//   showHTML() {
//     document.querySelector("form").innerHTML = 
//       //This is the header of the question
//       html = `<div class="form-group">
//             <label> ${super.name} </label>
//         <div class="radio-group">`
//     //for each option in options, create a new thingy
//     for (let index = 0; index < this.options.length; ++index){
//       html += `<input type="radio" name="${super.shortName}" id="${option[index].toLowerCase()}" value="${option[index]}" required>
//           <label for="${option[index].toLowerCase()}">${option[index]}</label>`

//           {...This repeats for each question of this type.}
//         </div>
//       </div >`
//   }
// }
// test = new Question("f", "afs", "asf", "jimmy");
// test.showHTML();





// /*
//   Questions Have:
//     1. Option for format
//     2. Content
//     3. Sending data location
//     4.
// */


// // Pull JSON
// // For each question in JSON
//   // Figure out