-- select the DB to use
USE xampl_schemas;

--	Prestamos DB


-- =========================================================================================================================	
--	Esta base de datos esta destinada a una empresa que requiere un esquema que almacene y gestione
--	prestamos de clientes, socios, prestamos, carteras, intereses, balances de caja.
-- =========================================================================================================================


-- Enfocaremos la topologia snowflake, la cual centra todas las dimensiones contenidas en cada tabla individual con ciertas dependencias

-- Creamos la tabla de Clientes

CREATE TABLE IF NOT EXISTS `Clientes`(

	-- setting columns
	`clienteID`				INT(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
	`documento`				INT(10) UNSIGNED NOT NULL,
	`nombre`				VARCHAR(50) NOT NULL,
	`email`					VARCHAR(40) default 'None',
	`telefono`				INT(10) UNSIGNED NOT NULL,
	`fecha suscripcion`		DATE,
	`tipo suscripcion`		ENUM('X', 'Y'),
	`activo`				ENUM('SI', 'NO'),
	`pais`					INT UNSIGNED,
	`departamento`			INT UNSIGNED,
	`municipio`				INT UNSIGNED,
	`genero`				ENUM('Hombre', 'Mujer', 'Prefiero no decir'),
	
	-- definimos las claves primarias y externas
	PRIMARY KEY (`clienteID`),
	
	FOREIGN KEY (`pais`) REFERENCES `Paises`(`paisID`),
	
	FOREIGN KEY (`departamento`) REFERENCES `Departamentos`(`departamentoID`),
	
	FOREIGN KEY (`municipio`) REFERENCES `Municipios`(`municipioID`)

) ENGINE=InnoDB;	-- Motor de tabla predeterminado
ALTER TABLE `Clientes` AUTO_INCREMENT=9111;


-- creamos la tabla de Regiones las cuales supongo debe haber algun lugar de donde
-- sacar la lista de regions para insertar los nombres de todos lo paises, departamentos y municipios

CREATE TABLE IF NOT EXISTS `Paises`(

	-- setting columns
	`paisID`		INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`nombre`		VARCHAR(20),

	-- definimos las claves primarias y externas
	PRIMARY KEY (`paisID`)

);

CREATE TABLE IF NOT EXISTS `Departamentos`(

	-- setting columns
	`departamentoID`	INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`nombre`			VARCHAR(20) NOT NULL,
	`pais`				INT UNSIGNED,

	-- definimos las claves primarias y externas
	PRIMARY KEY (`departamentoID`),
	
	FOREIGN KEY (`pais`) REFERENCES `Paises`(`paisID`)

);


CREATE TABLE IF NOT EXISTS `Municipios`(

	-- setting columns
	`municipioID`		INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`nombre`			VARCHAR(20) NOT NULL,
	`departamento`		INT UNSIGNED,
	`pais`				INT UNSIGNED,

	-- definimos las claves primarias y externas
	PRIMARY KEY (`municipioID`),

	FOREIGN KEY (`departamento`) REFERENCES `Departamentos`(`departamentoID`),
	
	FOREIGN KEY (`pais`) REFERENCES `Paises`(`paisID`)

);


-- creamos la tabla de catalogo de prestamos que contiene el detalle de cada plan de creditos

CREATE TABLE IF NOT EXISTS `Catalogo`(

	-- creamos las columnas
	`ID`				INT(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
	`plazos`			INT UNSIGNED NOT NULL,
	`monto limite`		INT UNSIGNED NOT NULL,
	`interes`			FLOAT UNSIGNED NOT NULL,

	-- definimos la clave primaria para esta tabla
	PRIMARY KEY (`ID`)

);
ALTER TABLE `Catalogo` AUTO_INCREMENT=9111;




-- creamos la tabla de Prestamos, la cual es el centro de nuestro copo de nieve

CREATE TABLE IF NOT EXISTS `Prestamos`(

	-- creamos las columnas
	`prestamoID`			INT(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
	`tipo prestamo`			INT UNSIGNED NOT NULL,
	`monto prestado`		INT UNSIGNED NOT NULL,
	`fecha solicitud`		DATE NOT NULL,
	`fecha entrega`			DATE NOT NULL,
	`fecha devolucion`		DATE NOT NULL,
	`cliente`				INT(8) UNSIGNED NOT NULL,
	`pais`					INT UNSIGNED NOT NULL,
	`departamento`			INT UNSIGNED NOT NULL,
	`municipio`				INT UNSIGNED NOT NULL,

	-- definimos las claves primarias y externas
	PRIMARY KEY (`prestamoID`),

	FOREIGN KEY (`tipo prestamo`) REFERENCES `Catalogo`(`ID`),
	FOREIGN KEY (`cliente`) REFERENCES `Clientes`(`clienteID`),
	FOREIGN KEY (`pais`) REFERENCES `Paises`(`paisID`),
	FOREIGN KEY (`departamento`) REFERENCES `Departamentos`(`departamentoID`),
	FOREIGN KEY (`municipio`) REFERENCES `Municipios`(`municipioID`)

);

-- creamos la table donde se llevan los registros de pago

CREATE TABLE IF NOT EXISTS `Libro de Pagos`(

	-- creamos las columnas
	`pagoID`			INT(12) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
	`prestamo`			INT(10) UNSIGNED ZEROFILL NOT NULL,
	`monto pago`		FLOAT UNSIGNED NOT NULL,
	`fecha pago`		DATE,
	`cliente`			INT(8) UNSIGNED ZEROFILL NOT NULL,
	`saldo`				FLOAT UNSIGNED NOT NULL,
	`cuotas restantes`	INT UNSIGNED NOT NULL,


	-- creamos la clave primaria y las claves externas
	PRIMARY KEY (`pagoID`)

	FOREIGN KEY (`prestamo`) REFERENCES `Prestamos`(`prestamoID`),
	FOREIGN KEY (`cliente`) REFERENCES `Clientes`(`clienteID`)

);



