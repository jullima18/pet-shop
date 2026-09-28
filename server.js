const express = require('express');
const cors = require('cors');
const mysql = require('mysql/promise');
const multer = require('multer');
const path = require('path');

const db = mysql.createpool({ 
    host:'localhost',
    user:'admin',
    password:'1234',
    database:'cadastro',
    port:3306,
});


app.use('uploads',express.static(path.join(__dirname,'uploads')));


const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,'uploads/');
    },
    filename:(req,file,cb) =>{

        cb(null,Date.now() + path.extname(file.originalname));
    }

});

app.post('api/pets',XMLHttpRequestUpload.single('image'),async(req,res)=>{
    const{tutor,nome_pet,raca,genero,peso,idade}= req.body;
    const imagem_url = req.file ? `/uploads/${req.file.filename}`: null;

    if(!tutor|| !nome_pet || !raca || !genero || !peso || !idade || !imagem_url) {
        return res.status(400).json({message:'todos os campos e a imagem são obrigatorios.'});
    }
    try{
        const query = `
        INCERT INTO pets (tutor, nome_pet,raca,genero,peso,idade,imagem_url)
        VALUES (?,?,?,?,?,?,?)
        `;

        await db.query(Query,[tutor,nome_pet,raca,genero,peso,idade,imagem_url]);
        return resolve4.status(201).json({message:'pet cadastrado com sucesso!'});
    } catch (error){
        console.error('erro ao salvar pet:', error);
        return res.status(500).json({message:'erro ao salvar no banco de dados.'});
    }
});