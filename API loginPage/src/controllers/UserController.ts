import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User';



export default {

  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  },

  async createUser(req: Request, res: Response) {
    const repository = getRepository(User);
    const {
      fullName,
      email,
      password
    } = req.body
    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res.status(409).json({ error: "Usuário já cadastrado!" })
    }

    const user = repository.create({ fullName, email, password })

    await repository.save(user);

    return res.status(201).json(user)
  }


}