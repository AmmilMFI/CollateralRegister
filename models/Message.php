<?php
namespace models;

require_once $_SERVER['DOCUMENT_ROOT']."/controller/Database.php";

use controller\Database;

class Message
{
    private $sender;
    private $receiver;
    private $body;
    private $collateral;
    private $date;
    private $queries;

    /**
     * Message constructor.
     * @param $sender
     * @param $body
     * @param $collateral
     */
    public function __construct($sender, $body, $collateral)
    {
        $this->sender = $sender;
        $this->body = $body;
        $this->collateral = $collateral;
        $tz = 'Africa/Lagos';
        $timestamp = time();
        $dt = new \DateTime("now", new \DateTimeZone($tz));
        $dt->setTimestamp($timestamp);
        $this->date = $dt->format("Y-m-d H:i:s");
        $this->queries = [];
    }

    public static function fromJson($content)
    {
        $coll = new Message($content["sender"], $content["body"], $content["collateral"]);
        return $coll;
    }

    /**
     * @return mixed
     */
    public function getSender()
    {
        return $this->sender;
    }

    /**
     * @param mixed $sender
     */
    public function setSender($sender)
    {
        $this->sender = $sender;
    }

    /**
     * @return mixed
     */
    public function getReceiver()
    {
        return $this->receiver;
    }

    /**
     * @param mixed $receiver
     */
    public function setReceiver($receiver)
    {
        $this->receiver = $receiver;
    }

    /**
     * @return mixed
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * @param mixed $body
     */
    public function setBody($body)
    {
        $this->body = $body;
    }

    /**
     * @return mixed
     */
    public function getCollateral()
    {
        return $this->collateral;
    }

    /**
     * @param mixed $collateral
     */
    public function setCollateral($collateral)
    {
        $this->collateral = $collateral;
    }

    /**
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param string $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }
    public static function getMessagesR($user)
    {
        $sql = "SELECT * FROM message
WHERE receiver ='$user'";
        $result = Database::select($sql);
        error_log(count($result));

        return ["messages" => array_reverse($result)];

    }

    public static function getMessagesS($user)
    {
        $sql = "SELECT * FROM message
WHERE sender ='$user'";
        $result = Database::select($sql);
        error_log(count($result));

        return ["messages" => array_reverse($result)];
    }


        public function send(){
        $sql = "SELECT username FROM users 
        WHERE role = 'director'";
        $result = Database::select($sql);
        foreach ($result as $director){
            $this->persist($director['username']);
        }
        $this->flush();
    }

    public function sendToOne($receiver){
        $this->persist($receiver);
        $this->flush();
    }
    public static function changeStatus($id){

        $sql = "UPDATE message
        SET rread = '1'
        WHERE id='$id'";
        Database::selectRC($sql);
    }
    public static function clearAll($username){
        $sql = "DELETE FROM message  
        WHERE (receiver = '$username')";
        try{
            Database::selectRC($sql);
            return 1;
        }
        catch (\Exception $e){
            return 0;
        }
    }
    public function persist($user)
    {
        array_push($this->queries, "INSERT INTO message (sender,receiver,body,date,collateral) 
VALUES ('$this->sender','$user','$this->body','$this->date','$this->collateral')");
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