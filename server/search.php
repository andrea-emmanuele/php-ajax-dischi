<?php
    include "data.php";

    $artist = $_GET["artist"];
    $results = [];

    foreach ($disks as $disk) {
        if (is_numeric(stripos($disk["author"], $artist))) {
            array_push($results, $disk);
        }
    }

    header("Content-Type: application/json");
    echo json_encode($results);


