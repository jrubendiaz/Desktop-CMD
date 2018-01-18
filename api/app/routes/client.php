<?php
/*
*   GET clients to retrived - all clients in DesktopCRM
*/
$app->get('/clients', 'getAllClients');

/*
*   GET client to retrived - all details specific client
*   @ params {id} - client's id
*/
$app->get('/clients/{id}', 'getClientDetails');

/*
*   POST router to add
*   new client in the system
*/
$app->post('/clients', 'postAddClient');

/*
*   PUT client to update
*   client's details
*/
$app->put('/clients/{id}', 'putUpdateClient');

/*
*   DELETE specific client
*/
$app->delete('/clients/{id}', 'deleteClientInstance');

?>