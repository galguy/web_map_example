<?php
if (isset($_FILES['upload_file'])) {

    if(move_uploaded_file($_FILES['upload_file']['tmp_name'], "/home/ubuntu/workspace/www/data/geoJson.json")){

        echo $_FILES['upload_file']['name']. " OK";

    } else {

        echo $_FILES['upload_file']['name']. " KO";

    }

    exit;

} else {

    echo "No files uploaded ...";

}
?>
