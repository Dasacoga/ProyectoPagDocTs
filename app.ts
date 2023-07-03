let pages = {
    'home' : `<h3>Bienvenido a Medpage </h3> En esta pagina podras ver a tus pacientes si eres doctor, y tomar tus citas si eres pasciente`,
    'doc' : `<h3>Formulario para Doctores</h3>
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

    
    'user' : `<h3>Formulario para Usuarios</h3>
    <form class="form">
        Nombre: <input type="text" name="name" placeholder="Nombre" required> 

        Apellido: <input type="text" name="apellido" placeholder="Apellido" required><br/><br/>

        Numero de Cedula: <input type="number" name="Cedula" placeholder="C.C" required><br/><br/>

        Edad:
        <input type="number" name="consultorio"  min="10" max="100" required><br/><br/>

        Numero de contacto:
        <input type="number" name="numbero" placeholder="Telefono" required><br/><br/>


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
            break;
        case 'doc':
            contentToReturn = pages.doc;
            break;
        case 'user':
            contentToReturn = pages.user;
            break;
        case 'citas':
            contentToReturn = pages.citas;
            break;
        case 'contact':
            contentToReturn = pages.contact;
            break;
        default:
            contentToReturn = pages.home;
            break;				
    }
   document.getElementById('content')!.innerHTML= contentToReturn; 
}