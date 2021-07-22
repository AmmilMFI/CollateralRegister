<?php
namespace models;

require_once $_SERVER['DOCUMENT_ROOT']."/controller/Database.php";

use controller\Database;

class Collateral
{
    private $title;
    private $firstName;
    private $lastname;
    private $middlename;
    private $uploader;
    private $branch;
    private $comments;
    private $date;
    private $files;
    private $queries;

    /**
     * Collateral constructor.
     * @param $title
     * @param $firstName
     * @param $lastname
     * @param $middlename
     * @param $uploader
     * @param $branch
     * @param $comments
     * @param $date
     * @param $files
     */
    public function __construct($title, $firstName, $lastname, $middlename, $uploader, $branch, $comments, $files)
    {
        $this->title = $title;
        $this->firstName = $firstName;
        $this->lastname = $lastname;
        $this->middlename = $middlename;
        $this->uploader = $uploader;
        $this->branch = $branch;
        $this->comments = $comments;
        $this->date = date("l jS \of F Y h:i:s A");
        $this->files = $files;
        $this->queries = [];
    }

    public static function fromJson($content)
    {
        $user = new Collateral($content["title"], $content["first_name"], $content["last_name"], $content["middle_name"],
            $content["uploader"], $content["branch"], $content["comments"], $content["files"]);
        return $user;
    }


    public static function getAllCollaterals()
    {
        $sql = "SELECT * FROM collaterals";
        $result = Database::select($sql);
        error_log(count($result));

        return ["collaterals" => $result];

    }

    public function persist()
    {
        array_push($this->queries, "INSERT INTO collaterals (title,first_name,last_name, middle_name, uploader,branch,comments, date,files) 
VALUES ('$this->title','$this->firstName','$this->lastname','$this->middlename','$this->uploader','$this->branch','$this->comments','$this->date','$this->files')");
    }

    public static function getAllUsers(){
        $sql = "SELECT * FROM collaterals";
        $result = Database::select($sql);

        return ["users" =>$result];

    }
    public function flush()
    {
        try {
            foreach ($this->queries as $query)
                Database::executeQuery($query);

        } catch (\PDOException $e) {
            throw $e;
        }


    }
}