//listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //Get references to form elements using their IDs
    const  profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        //Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
     
    //Create Resume Output
    const resumeOutput = `
    <h2>resume</h2>
    ${profilePictureURL ? `<img src"${profilePictureURL} alt="profile Picture" class='profilePicture">`: "" }
    <p><strong>Name:</strong> <span id="edit.name" class="editable"> ${name} </span> </p>
    <p><strong>${profilePictureURL ? `<img src"${profilePictureURL} alt="profile Picture" class='profilePicture">`: "" }ail:</strong> ${email} </p>
    <p><strong>email Number:</strong> <span id="edit.email" class="editable"> ${email} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit.phone" class="editable"> ${phone} </span> </p>
    
    <h3>education</h3>
    <p id="edit.education" class="editable">${education}</p>

    <h3>experience</h3>
    <p id="edit.experience" class="editable">${experience}</p>

    <h3>skills</h3>
    <p id="edit.skills" class="editable">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
    }
} else {
    console.error('one or more output elements are missing')
}
});


 function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'span'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add("editing-Input")

                input.addEventListener("blur", function (){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    });
}













