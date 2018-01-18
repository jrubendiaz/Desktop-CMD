<?php

/*
*   Get all clients in the system
*/
function getAllClients() {
    $sql = "SELECT * FROM clients";
    try {
        $db = DB::getInstance();
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $db->query($sql);
        $computers = $stmt->fetchAll(PDO::FETCH_OBJ);
        DB::close();
        echo json_encode($computers);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

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
        $computer = $stmt->fetchAll(PDO::FETCH_OBJ);
        DB::close();
        echo json_encode($computer);
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
	$computer = json_decode($request->getBody());
	$sql = " UPDATE clients
			 SET id=:id, name=:name, subname=:subname, dni=:dni, productos=:productos
			 WHERE id='" . $args['id'] . "'";
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
?>