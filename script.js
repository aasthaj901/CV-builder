
document.addEventListener("DOMContentLoaded", function () {
    const createCVButton = document.getElementById("createCVButton");
    createCVButton.addEventListener("click", generateCV);
});

function generateCV() {
    console.log("generateCV function called");
    let name = document.getElementById("name").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = name;
    document.getElementById("phonenoT").innerHTML = document.getElementById("phoneno").value;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;
    document.getElementById("educationT").innerHTML = document.getElementById("education").value;
    document.getElementById("workexT").innerHTML = document.getElementById("workex").value;
    document.getElementById("skillsT").innerHTML = document.getElementById("skills").value;
    document.getElementById("achievementsT").innerHTML = document.getElementById("achievements").value;
    document.getElementById("linkedInT").innerHTML = document.getElementById("linkedIn").value;
    document.getElementById("certificatesT").innerHTML = document.getElementById("certificates").value;
    document.getElementById("extracT").innerHTML = document.getElementById("extrac").value;

    // Toggle visibility of CV form and template
    document.getElementById("cv-temp").hidden = false;
    document.getElementById("cv-form").hidden = true; 
    download.hidden=false;
    console.log("end of function");
}
//generate pdf copy of CV
window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const cvtemp = this.document.getElementById("cv-temp");
            console.log(cvtemp);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(cvtemp).set(opt).save();
        })
}

