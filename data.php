<?php
$perpage = 5;
$mysqli = new mysqli('127.0.0.1:3306','u925445636_root','qL75kBqfGP2W','u925445636_objte');
if($mysqli->connect_error){
    die('Error : ('.$mysqli->connect_errno.')'.$mysqli->connect_error);
}
$numpage = filter_var($_POST['page'], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH);
if(!is_numeric($numpage)){
    header('HTTP/1.1 500 Invalid page number!');
    exit();
}
$posisi = (($numpage-1) * $perpage);
$hasil = $mysqli->prepare("SELECT ID, CANTIDAD, Objeto FROM objetos LIMIT ?, ?");
$hasil->bind_param("dd", $posisi, $perpage);
$hasil->execute();
$hasil->bind_result($ID, $CANTIDAD, $Objeto);
while($hasil->fetch()){
    echo "<li><input type='checkbox' aria-label='Checkbox for following text input'> ".$Objeto." </li>";
}
?>