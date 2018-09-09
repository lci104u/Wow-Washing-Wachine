<?php
    include(".env.php");
    
    $conn = mysqli_connect( $_ENV['$DBHOST'], $_ENV['$DBUSER'], $_ENV['$DBPASSWD'] );
    if (empty($conn)){
        print mysqli_error($conn);
        die ("無法連結資料庫");
    }

    if( !mysqli_select_db($conn, $_ENV['$DBNAME'])) {
        die ("無法選擇資料庫");
    }

    // 設定連線編碼
    mysqli_query( $conn, "SET NAMES 'utf8'");

    // 取得資料
    $sql = "select * from `status`";
    $result = mysqli_query($conn, $sql);

    // 轉換成JSON
    $json = array();
    while($array = mysqli_fetch_assoc($result)){
        array_push($json, $array);
    }

    // 輸出
    echo json_encode($json);
?>