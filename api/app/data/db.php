<?php

/*
 * DB: Establece una conexión mediante PDO (PHP Data Object)
 * empleando los parámetros de configuración para conectarse con la base
 * de datos mysql
 */
class DB {
	protected static $instance;

	/*
    * getInstance: Devuelve una instancia de un objeto PDO con conexión
    * a la base de datos establecida en los parámetros
    */
	public static function getInstance() {
		if(empty(self::$instance)) {

			// variables para la conexión
			$dbhost = "localhost";
			$dbuser = "root";
			$dbpass = "";
			$dbname = "DesktopCRM";
			try {
				self::$instance = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
				self::$instance->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT );
				self::$instance->query('SET NAMES utf8');
				self::$instance->query('SET CHARACTER SET utf8');
			}
			catch(PDOException $e) {
				echo $e->getMessage();
			}
		}
		return self::$instance;
	}

	/*
    * close: elimina la conexión PDO con la base de datos almacenada
    * en la instancia creada por el método anterior
    */
	public static function close() {
		if(!empty(self::$instance)) {
			$instance = null;
		}
	}
}

?>