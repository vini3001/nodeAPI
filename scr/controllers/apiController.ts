import { Router } from 'express';
import { Request, Response } from 'express'
import { Op } from 'sequelize'
import { Phrase, PhraseInstance } from '../models/Phrase'

export const ping = (req: Request, res: Response) => {
    //let frases= Phrase.findAll()
    //res.json({frase: frases})
}

export const createPhrase = async (req: Request, res: Response) => {
    let { txt, author } = req.body

    let newPhrase = await Phrase.create({ author, txt })
    res.json({ id: newPhrase.id, author, txt })

    console.log(newPhrase);
}

export const readPhrase = async (req: Request, res: Response) => {

    let readPhrases = await Phrase.findAll()
    res.json({ readPhrases })

    console.log(readPhrases);
}

export const filterPhrases = async (req: Request, res: Response) => {
    const { id } = req.params

    let readPhrases = await Phrase.findOne({ where: { id } })
    res.json({ readPhrases })

    console.log(readPhrases);
}

export const updatePhrases = async (req: Request, res: Response) => {
    let { txt, author } = req.body
    const { id } = req.params

    let updatePhrases = await Phrase.update({
        author,
        txt
    },
        { where: { id } });

    res.json({ updatePhrases })

    console.log(updatePhrases);
}

export const removePhrase = async (req: Request, res: Response) => {
    let id = req.params
    console.log(id)
    let status = await Phrase.destroy({ where: id })
    console.log(status)
    res.json({})
}