/** Dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper"); 

exports.login = (req,res,next) => {
    userDto.login({username: req.body.username}, (err, data) => {
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if(data.length > 0){
            let pass = helper.DecryptPassword(data[0].password);
            console.log("password en 80:" + pass);
            if(req.body.password === pass) {
                tk = helper.GenerateToken(data[0]._id);
                return res.status(200).json(
                    {
                        token: tk
                    }
                );
            } else {
               return res.status(400).json(
                    {
                        info: "Not credenciales fine"
                    }
                );
            }
        };
    });
}

exports.getAll = (req,res,next) => {
   
    userDto.getAll({}, (err, data) => {
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


exports.deleteUsers =() =>{
    userDto.delete({_id: req.body.id}, (err, data) => {
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