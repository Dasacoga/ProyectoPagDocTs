DROP DATABASE IF EXISTS citas;
CREATE DATABASE citas CHARACTER SET utf8mb4;
use citas;
CREATE table persona(
    Nombre varchar(20) not null,
    Apellido varchar(20) not null,
    id_cedula_usuario INT UNSIGNED not null primary key,
    Edad int not null,
    Telefono  varchar(11) not null
);
CREATE TABLE doctores(
    id_doctor INT UNSIGNED AUTO_INCREMENT primary key,
    nombre_doctor varchar(20) not null,
    Apellido_doctor varchar(20) not null,
    Especialidad varchar(45) not null,
    consultorio int not null,
    correo_de_contacto varchar(30) not null
);


CREATE table cita (
	id_cita_medica INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cedula_usuario varchar(20) not null,
    Especialidad varchar(45) not null,
    Fecha date not null,
    hora time not null
);


