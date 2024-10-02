<?php

class Form{
    private $CodeForme;
    public function Create(){
        return $this->CodeForme;
    }

    public function Validate(array $form,array $champs){

        foreach($champs  as $champ){
            if(!isset($form[$champ] || empty($form[$champ]))){
              return false;
            }
           
        }
        return true;
    }
}
