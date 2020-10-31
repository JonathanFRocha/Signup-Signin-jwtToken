import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User';
import userViews from '../views/userViews';


export default {

  async authenticate(req:Request, res:Response){
    const repository = getRepository(User);
    const {
      fullName,
      email,
      password 
    } = req.body
    const user = await repository.findOne({where : {email}});
    if(!user) {
      return res.status(401).json({error: "Email não existe."})
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword){
      return res.status(401).json({error: "Email Invalido."})
    }

    

    const token = jwt.sign({ id: user.id}, 'segredo', {expiresIn : "15m"});

    return res.json({
      user:userViews.render(user),
      token,
    })

  }
}