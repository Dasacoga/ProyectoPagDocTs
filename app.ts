
let a=0
let pages = {
    'home' : `<h3>Bienvenido a Medpage </h3> En esta pagina podras ver a tus pacientes si eres doctor, y tomar tus citas si eres pasciente`,
    'doc' : `<h3>Formulario de registro para Doctores</h3>
    <form class="form">
        Nombre: <input type="text" name="name" placeholder="Nombre" required> 

        Apellido: <input type="text" name="apellido" placeholder="Apellido" required><br/><br/>

        Especialidad:
        <select name="Especialidad" id="lang">
          <option value="Medicina general">Medicina general</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Medicina interna">Medicina interna</option>
          <option value="Dermatología">Dermatología</option>
          <option value="Rehabilitación física">Rehabilitación física</option>
          <option value="Psicología">Psicología</option>
          <option value="Odontología">Odontología</option>
          <option value="Radiología">Radiología</option>
        </select>

        Consultorio:
        <input type="number" name="consultorio"  min="1" max="30" required><br/><br/>

        Correo de contacto:
        <input type="email" name="email" placeholder="email" required><br/><br/>

        <input type="submit" value="Enviar">
        <div class="contact-form-response none">
        </div>
    </form>`,

    
    'user' : `<h3>Formulario  de registro para Usuarios</h3>
    <form class="form">
        Nombre: <input type="text" name="name" placeholder="Nombre" required> 

        Apellido: <input type="text" name="apellido" placeholder="Apellido" required><br/><br/>

        Numero de Cedula: <input type="number" name="Cedula" placeholder="C.C" required><br/><br/>

        Edad:
        <input type="number" name="consultorio"  min="10" max="100" required><br/><br/>

        Numero de contacto:
        <input type="number" name="numero" placeholder="Telefono" min="1000000000" max="9999999999" required><br/><br/>


        <input type="submit" value="Enviar">
        <div class="contact-form-response none">
        </div>
    </form>`,
    'citas' : `<h3>Formulario para Citas</h3>
    <form class="form">
        Nombre: <input type="text" name="name" placeholder="Nombre" required> 

        Apellido: <input type="text" name="apellido" placeholder="Apellido" required><br/><br/>

        Especialidad:
        <select name="Especialidad" id="lang">
          <option value="Medicina general">Medicina general</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Medicina interna">Medicina interna</option>
          <option value="Dermatología">Dermatología</option>
          <option value="Rehabilitación física">Rehabilitación física</option>
          <option value="Psicología">Psicología</option>
          <option value="Odontología">Odontología</option>
          <option value="Radiología">Radiología</option>
        </select>

        Consultorio:
        <input type="number" name="consultorio"  min="1" max="30" required><br/><br/>

        Correo de contacto:
        <input type="email" name="email" placeholder="email" required><br/><br/>

        <input type="submit" value="Enviar">
        <div class="contact-form-response none">
        </div>
    </form>`,
    'contact' : `Our Contact Us page<br/><br/><img src='media/arch.jpeg' />`
};


function getPageContent(page:any){
    let contentToReturn;
    switch(page){
        case 'home':
            contentToReturn = pages.home;
            a=1
            break;
        case 'doc':
            contentToReturn = pages.doc;
            a=2
            break;
        case 'user':
            contentToReturn = pages.user;
            a=3
            break;
        case 'citas':
            contentToReturn = pages.citas;
            a=3
            break;
        case 'contact':
            contentToReturn = pages.contact;
            a=4
            break;
        default:
            contentToReturn = pages.home;
            a=1
            break;				
    }
   document.getElementById('content')!.innerHTML= contentToReturn; 
}

const d =document;
if (a==2){
    d.addEventListener("submit", (e:any) => {
        e.preventDefault();
        alert("¿Se enviara el formulario de doctores, estas seguro?")
    
        const $response:any=d.querySelector(".contact-form-response")
            const $form:any=d.querySelector(".form")
    
        fetch("https://formsubmit.co/ajax/dacolorado@unal.edu.co",{
            method:"POST",
            body: new FormData(e.target)
        })
        .then(res=>res.ok ? res.json(): Promise.reject(res))
        .then(json => {
            console.log(json)
            $response.classList.remove("none")
            $form.reset()
        })
        .catch(err => {
            console.log(err);
        });
    })
}


