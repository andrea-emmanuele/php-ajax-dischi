<?php
    include "data.php";
    include "createJson.php";

    $json_data = json_encode($disks, JSON_PRETTY_PRINT);

    header("Content-Type: application/json");

    echo $json_data;

