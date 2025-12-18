const projectButton = document.getElementById("ProjectButton");
const projectsList = document.querySelector(".projectsList");

function inicializateProject(name) {
    switch (name) {
        case 'fechar':
            document.querySelector('.projects').classList.add('lock');

            break
        case 'abrir':
            document.querySelector('.projects').classList.remove('lock');

            break
    }
}

function pdfView(action) {
    const pdf = document.getElementById("pdfVisualizer");

    if (action === 'abrir') {
        pdf.classList.remove('lock');
        document.body.style.overflow = 'hidden';
    }

    if (action === 'fechar') {
        pdf.classList.add('lock');
        document.body.style.overflow = 'auto';
    }
}


async function dbJson() {
    const url = await fetch('./src/json/index.json');
    const response = await url.json();


    return response
}

dbJson().then(response => {
    for (let i = 0; i < response.projetos.length; i++) {
        projectsList.innerHTML += `
          <a href="${response['projetos'][i]['link']}" target="_blank">
            <div class="cardProject" style="background: url('${response['projetos'][i]['photo']}') center center no-repeat; background-Size: cover;">
            <div class="bg-card">
            <h4>${response['projetos'][i]['name']}</h4>
            </div>
          </div>
          </a>
         
        `
    }

})


