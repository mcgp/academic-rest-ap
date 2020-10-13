/** Dto */
const programDto = require("../../model/dto/program.dto");
const config = require("config");
const helper = require("../helpers/general.helper"); 

exports.createProgram = (req,res,next) => {
    let program = {
        code: req.body.code,
        name: req.body.name,
        nameDirector: req.body.nameDirector,
        idF: req.body.idF
    };
    programDto.create(program, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        let id = config.get("idFaculty").program;
        let program = {
            code: program.code,
            name: program.name,
            nameDirector: program.nameDirector,
            idF: id
        };
        });
    
};


exports.updateProgram = (req,res,next) => {
    let id = config.get("idFaculty").program;
    let program = {
        code: program.code,
        name: program.name,
        nameDirector: program.nameDirector,
        idF: id
    
    };
    programDto.update({_id: req.body.id}, program, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getByCode = (req,res,next) => {
   
    programDto.getByCode({code: req.params.code}, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.getAll = (req,res,next) => {
   
    programDto.getAll({}, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.deleteProgram =() =>{
    programDto.delete({_id: req.body.id}, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}