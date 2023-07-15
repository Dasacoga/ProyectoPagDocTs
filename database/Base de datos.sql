DROP DATABASE IF EXISTS citas;
CREATE DATABASE citas CHARACTER SET utf8mb4;
use citas;
CREATE table persona(
    id_persona INT UNSIGNED AUTO_INCREMENT primary key,
    Nombre varchar(20) not null,
    Apellido varchar(20) not null,
    cedula_usuario varchar(20) not null,
    Edad int not null,
    Telefono  varchar(11) not null
);

CREATE table Cita (
	id_cita_medica INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_persona int UNSIGNED,
    fecha date not null,
    foreign key (id_persona) references persona(id_persona)
);

CREATE TABLE Doctores(
    id_doctor INT UNSIGNED AUTO_INCREMENT primary key,
    nombre_doctor varchar(20) not null,
    Apellido_doctor varchar(20) not null,
    consultorio int not null,
    correo_de_contacto varchar(30) not null,
    id_cita_medica INT UNSIGNED,
	foreign key (id_cita_medica) references Cita(id_cita_medica)
);

create table Especialidad (
	id_doctor INT UNSIGNED primary key,
    Especialidad varchar(20) ,
    id_cita_medica INT UNSIGNED,
	foreign key (id_doctor) references Doctores(id_doctor),
    foreign key (id_cita_medica) references Cita(id_cita_medica)
);