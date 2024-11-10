var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Create Resume Output
        var resumeOutput = "\n    <h2>resume</h2>\n    ".concat(profilePictureURL ? "<img src\"".concat(profilePictureURL, " alt=\"profile Picture\" class='profilePicture\">") : "", "\n    <p><strong>Name:</strong> <span id=\"edit.name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>").concat(profilePictureURL ? "<img src\"".concat(profilePictureURL, " alt=\"profile Picture\" class='profilePicture\">") : "", "ail:</strong> ").concat(email, " </p>\n    <p><strong>email Number:</strong> <span id=\"edit.email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Phone Number:</strong> <span id=\"edit.phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n    \n    <h3>education</h3>\n    <p id=\"edit.education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>experience</h3>\n    <p id=\"edit.experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>skills</h3>\n    <p id=\"edit.skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add("editing-Input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
