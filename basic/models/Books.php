<?php

namespace app\models;

use Yii;


class Books extends \yii\db\ActiveRecord{
    public static function tableName(){
        return 't_books';
    }

    public   function rules(){
        return [
            [['name'],'required']
        ];
    }

    public function attributeLabels(){
        return [
            'id'=>'ID',
            'name'=>'书名',
        ];
    }

}

?>