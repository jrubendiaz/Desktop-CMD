<?php

// create autoloader slim framework
require 'vendor/autoload.php';

// create new instance slim app
$app = new Slim\App(['settings' => ['displayErrorDetails' => true]]);

// router dependency
require 'app/routes/config.php';
require 'app/routes/client.php';

// lib dependency
require 'app/lib/client.php';
// data
require 'app/data/db.php';

// run app
$app->run();