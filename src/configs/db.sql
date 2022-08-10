create database UC if no exists;

create table zona(
    zona int primary key auto_increment,
    descripcion varchar(100) not null
);
CREATE table clientes(
    codcliente int primary key auto_increment,
    nombre varchar(100) not null,
    direccion varchar(100) not null,
    codpostal varchar(100) not null,
    poblacion varchar(100) not null,
    telefono varchar(100) not null,
    fax varchar(100) not null,
    descuento double not null,
    zonaventas int not null,
    foreign key (zonaventas) references zona(zona)
);

create table articulos(
    codartic int primary key auto_increment,
    descripcion varchar(100) not null,
    pvp double not null,
);

create table pedidos(
    numpedido int primary key auto_increment,
    codcliente int not null,
    codartic int not null,
    unidades int not null,
    fechaped DATE not null,
    foreign key (codcliente) references clientes(codcliente)
    foreign key (codartic) references articulos(codartic)
);