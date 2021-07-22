<?php
namespace models;

require_once $_SERVER['DOCUMENT_ROOT']."/controller/Database.php";
const ROLES = [];
use controller\Database;
class Admin
{
    public $userName;
    private $password;
    private $queries;

    /**
     * Admin constructor.
     * @param $userName
     * @param $password
     */
    public function __construct($userName, $password)
    {
        $this->userName = $userName;
        $this->password = $password;
        $this->queries =[];
    }
    public function passwordMatch($password){
        return password_verify($password ,trim($this->password));
    }

    public static function fromJson($content){
        $admin = new Admin($content["username"],password_hash($content["password"],PASSWORD_BCRYPT,['cost'=>12]));
        return $admin;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->userName;
    }



    public static function fromDatabase($username,$password){
        $sql = "SELECT * FROM admins  
WHERE (username = '$username')";
        $result = Database::select($sql);
        if(count($result) == 1){
            $row = $result[0];
            $admin = new Admin($row['username'],$row['password']);

            if($admin->passwordMatch($password)){
                return $admin;
            }
            else{
                throw new \Exception("Password Mismatch");
            }
        }
        else{
            throw new \Exception("No Admin Found");
        }

    }

    public static function isEmpty(){
        $sql = "SELECT * FROM admins";
        $result = Database::select($sql);
        if(count($result) == 0){

            return true;
        }
        return false;
    }
    public function persist()
    {
        array_push($this->queries, "INSERT INTO admins (username,password) 
VALUES ('$this->userName','$this->password')");
    }

    public static function isExists($field){
        $sql = "SELECT $field->fieldName FROM users  
WHERE ($field->fieldName ='$field->value')";
        if(count(Database::select($sql)) > 0)
            return true;
        else
            return false;

    }

    public function flush(){
        try{
            foreach ($this->queries as $query)
                Database::executeQuery($query);

        }
        catch(\PDOException $e){
            throw $e;
        }



    }

}