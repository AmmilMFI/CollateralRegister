<?php
/**
 * Created by PhpStorm.
 * User: ToluFash-Ammil
 * Date: 8/25/2021
 * Time: 2:22 PM
 */

namespace models;
use controller\Database;

require_once $_SERVER['DOCUMENT_ROOT']."/controller/Database.php";


class Staff
{
    private $id;
    private $staffCode;
    private $password;
    private $username;


    public function __construct($staffCode, $password, $username)
    {
        $this->staffCode = $staffCode;
        $this->password= $password;
        $this->username= $username;
        $this->queries =[];
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    public function passwordMatch($password){
        return password_verify($password ,trim($this->password));
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    public static function fromJson($content){
        $staff = new Staff($content["staffCode"],
            password_hash($content["password"],PASSWORD_BCRYPT,['cost'=>12]), $content['username']);
        return $staff;
    }

    /**
     * @param $username
     * @param $password
     * @return User
     * @throws \Exception
     */
    public static function fromDatabase($username,$password){
        $sql = "SELECT * FROM staff 
        WHERE (staffCode = '$username')";
        $result = Database::select($sql);
        if(count($result) == 1){
            $row = $result[0];
            $user = new Staff($row['staffCode'],$row['password'],$row['username']
                );
            if($user->passwordMatch($password)){
                return $user;
            }
            else{
                throw new \Exception("Password Mismatch");
            }
        }
        else{
            throw new \Exception("No User Found");
        }
    }

    public static function isStaffExists($username,$password){
        $sql = "SELECT * FROM staff 
        WHERE (staffCode = '$username')";
        $result = Database::select($sql);
        if(count($result) == 1){
            $row = $result[0];
            $user = new Staff($row['staffCode'],$row['password'],$row['username']);
            if($user->passwordMatch($password)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    public static function getAllUsers(){
        $sql = "SELECT id, staffCode, username FROM staff";
        $result = Database::select($sql);

        return ["staff" =>$result];
    }

    public static function deleteUser($username){
        $sql = "DELETE FROM staff 
        WHERE (staffCode = '$username')";
        try{
            Database::selectRC($sql);
            return 1;
        }
        catch (\Exception $e){
            return 0;
        }
    }
    public static function changePass($username,$password){
        $password = password_hash($password,PASSWORD_BCRYPT,['cost'=>12]);
        $sql = "UPDATE staff  
            SET password = '$password'
            WHERE staffCode = '$username'";

        try{
            Database::selectRC($sql);
            return 1;
        }
        catch (\Exception $e){
            return 0;
        }

    }
    public static function createTable(){
        $firstName = Database::formatColumn(["firstname VARCHAR(30) ","NOT NULL"]);
        $lastName = Database::formatColumn(["lastname VARCHAR(30) ","NOT NULL"]);
        $middleName = Database::formatColumn(["middlename VARCHAR(30) ","NOT NULL"]);
        $userName = Database::formatColumn(["username VARCHAR(30) ","NOT NULL"]);
        $email = Database::formatColumn(["email VARCHAR(50) ","NOT NULL"]);
        $phoneNo = Database::formatColumn(["phoneno VARCHAR(30) ","NOT NULL"]);
        $password = Database::formatColumn(["password VARCHAR(255) ","NOT NULL"]);
        $bvn = Database::formatColumn(["bvn VARCHAR(30) ","NOT NULL"]);
        $date = Database::formatColumn(["reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"]);
        Database::createTable("users",[$firstName,$lastName,$middleName,$userName,$email,$phoneNo,$password,$bvn,$date]);

    }

    public function persist()
    {
        array_push($this->queries, "INSERT INTO staff (staffCode,password, username) 
VALUES ('$this->staffCode','$this->password','$this->username')");
    }

    /**
     * @param {Field}$field
     */
    public static function isExists($field){
        $sql = "SELECT $field->fieldName FROM staff  
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