<?php
/*
*   BD Init
*/
function initDB() {
    $sql = "CREATE DATABASE IF NOT EXISTS desktopcrm;
    USE desktopcrm;
    CREATE TABLE IF NOT EXISTS `clients` (
    `id` int(11) NOT NULL,
    `name` varchar(100) NOT NULL,
    `subname` varchar(100) NOT NULL,
    `dni` varchar(9) NOT NULL,
    `photo` varchar(500) NOT NULL,
    `productos` varchar(500) NOT NULL
    ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;
    INSERT INTO `clients` (`id`, `name`, `subname`, `dni`, `photo`, `productos`) VALUES
    (1, 'Usuario', 'Test', '000000A', '/data/default/user.png', '[458, 4577, 456, 244, 788]');
    ALTER TABLE `clients`
    ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `id` (`id`);
    ALTER TABLE `clients`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;";
  try {
      $db = DB::getInstance();
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $stmt = $db->query($sql);
      DB::close();
      echo 'Base de datos inicializada con éxito';
  } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

/*
*   Get all clients in the system
*/
    function getAllClients() {
        $sql = "SELECT * FROM clients";
        try {
            $db = DB::getInstance();
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->query($sql);
            $clients = $stmt->fetchAll(PDO::FETCH_OBJ);
            DB::close();
            echo json_encode($clients);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    };

/*
*   Get client's details
*   @params {id} - client's id
*/

    function getClientDetails($request, $response, $args) {
        $sql = "SELECT * FROM clients WHERE id='" . $args['id'] . "'";
        try {
            $db = DB::getInstance();
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->query($sql);
            $clients = $stmt->fetchAll(PDO::FETCH_OBJ);
            DB::close();
            echo json_encode($clients);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    };

/*
*   Add new client
*/
    function postAddClient($request, $response, $args) {
        $client = json_decode($request->getBody());
        $sql = "INSERT INTO clients (`id`, `name`, `subname`, `dni`, `photo`, `productos`)
                VALUES (:id, :name, :subname, :dni, :photo, :productos)";
        try {
            $db = DB::getInstance();
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->prepare($sql);
            $stmt->bindParam("id", $client->id);
            $stmt->bindParam("name", $client->name);
            $stmt->bindParam("subname", $client->subname);
            $stmt->bindParam("dni", $client->dni);
            $stmt->bindParam("photo", $client->photo);
            $stmt->bindParam("productos", $client->productos);
            $stmt->execute();
            DB::close();
            echo 1;
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    };

/**
* update specific client
* @param {id} - client's id
*/
    function putUpdateClient($request, $response, $args) {
        $client = json_decode($request->getBody());
        $sql = " UPDATE clients
                SET name=:name, subname=:subname, dni=:dni, photo=:photo, productos=:productos
                WHERE id='" . $args['id'] . "'";
        try {
            $db = DB::getInstance();
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->prepare($sql);
            //$stmt->bindParam("id", $client->id);
            $stmt->bindParam("name", $client->name);
            $stmt->bindParam("subname", $client->subname);
            $stmt->bindParam("dni", $client->dni);
            $stmt->bindParam("photo", $client->photo);
            $stmt->bindParam("productos", $client->productos);
            $stmt->execute();
            DB::close();
            echo 1;
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    };

/**
* delete specific client
* @param {id} - client id
*/
    function deleteClientInstance($request, $response, $args) {
        $sql = "DELETE FROM clients
                WHERE id='" . $args['id'] . "'";
        try {
            $db = DB::getInstance();
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->query($sql);
            $stmt->execute();
            DB::close();
            echo 1;
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    };

?>