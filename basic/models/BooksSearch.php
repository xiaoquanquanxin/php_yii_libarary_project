<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Books;


class BooksSearch extends Books{

    public function rules(){
        return [
            [['id'],'integer'],
            [['name'],'safe'],
        ];
    }

    public function scenarios(){
        return Model::scenarios();
    }

    public function search($params){
        $query = Books::find();

        $dataProvider = new ActiveDataProvider([
            'query'=>$query,
        ]);

        $this->load($params);

        if(!$this->validate()){
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id'=>$this->id,
        ]);

        $query->andFilterWhere(['like','name',$this->name]);

        return $dataProvider;
    }

}


?>