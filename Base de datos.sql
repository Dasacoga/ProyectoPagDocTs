DROP DATABASE IF EXISTS citas;
CREATE DATABASE citas CHARACTER SET utf8mb4;
use citas;
CREATE table persona (
	cedula_usuario varchar(20) primary key not null,
    Nombre varchar(20) not null,
    Apellido varchar(20) not null,
    Telefono  varchar(11) not null,
    Edad int not null
);

CREATE table Cita (
	id_cita_medica INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cedula_usuario varchar(20) not null,
    fecha date not null,
    foreign key (cedula_usuario) references persona(cedula_usuario)
);

CREATE TABLE Doctores (
	cedula_doctor varchar(20) not null primary key,
	Nombre varchar(20) not null,
    Apellido varchar(20) not null,
    correo_de_contacto varchar(30) not null,
    id_cita_medica INT UNSIGNED,
	foreign key (id_cita_medica) references Cita(id_cita_medica)
);

create table Especialidad (
	cedula_doctor varchar(20) primary key,
    id_cita_medica INT UNSIGNED,
	foreign key (cedula_doctor) references Doctores(cedula_doctor),
    foreign key (id_cita_medica) references Cita(id_cita_medica)
)