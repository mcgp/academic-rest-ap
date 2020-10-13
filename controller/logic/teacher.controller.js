/** Dto */
const teacherDto = require("../../model/dto/teacher.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");


/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper")


exports.createTeacher = (req,res,next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        department: req.body.department
    };
    teacherDto.create(teacher, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        let r = config.get("roles").teacher;
        let user = {
            name: teacher.name,
            lastname: teacher.lastname,
            username: teacher.document,
            password: helper.EncryptPassword(req.body.password),
            role: r
        };
        userDto.create(user, (err, u) =>{
            if(err){
                teacherDto.delete({_id: data._id}, (e, data) => {
                    return res.status(400).json(
                        {
                            error: err
                        }
                    );
                });
                
            }
            notHelper.sendSMS(teacher.phone);
            res.status(201).json(
                {
                    info: data
                }
            );
        });
    });
};


exports.updateTeacher = (req,res,next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        department: req.body.department
    };
    teacherDto.update({_id: req.body.id}, teacher, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        
        return res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.getAll = (req,res,next) => {
   
    teacherDto.getAll({}, (err, data) => {
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

exports.getByDocument = (req,res,next) => {
   
    teacherDto.getByDocument({document: req.params.document}, (err, data) => {
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


exports.deleteTeachers =() =>{
    teacherDto.delete({_id: req.body.id}, (err, data) => {
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