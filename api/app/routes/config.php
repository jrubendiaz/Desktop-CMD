<?php

/*
* get version
*/
$app->get('/version', function ($request, $response, $args) {
    $response->write('Versión 1.0');
    return $response;
});

?>