import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const file = path.join(dirname, '../user.json');
export const getAllHeroes = (req,res) => {
    fs.readFile(file, "utf-8",(err, data) => {
        if (err) {
            console.error("Erreur lecture fichier JSON :",err)
            res.status(500).json({ error: "Erreur lecture fichier JSON" })
        }
        try {
            const heroes = JSON.parse(data)
            res.json(heroes.characters)
        } catch (error) {
            console.error("Erreur JSON :",error)
            res.status(500).json({ error: "Erreur JSON" })
        }
    });
};
export const getHeroById = (req,res) => {
    fs.readFile(file, "utf-8",(err, data) => {
        if (err) {
            console.error("Erreur lecture fichier JSON :",err)
            res.status(500).json({ error: "Erreur lecture fichier JSON" })
        }
        try {
            const id = req.params.id
            const heroes = JSON.parse(data)
            const character = heroes.characters.find(hero => hero.id == id)
            if (character) {
                res.json(character)
            } else {
                res.status(404).json({ error: "Hero not found" })
            }
        } catch (error) {
            console.error("Erreur JSON :",error)
            res.status(500).json({ error: "Erreur JSON" })
        }
    })
}
export const addHero = (req,res) => {
    fs.readFile(file, "utf-8",(err, data) => {
        if (err) {
            console.error("Erreur lecture fichier JSON :",err)
            res.status(500).json({ error: "Erreur lecture fichier JSON" })
        }
        try {
            const newHero = req.body
            const heroes = JSON.parse(data)
            heroes.characters.push(newHero)
            fs.writeFile(file, JSON.stringify(heroes), (err) => {
                if (err) {
                    console.error("Erreur lecture fichier JSON :",err)
                    return res.status(500).json({ error: "Erreur lecture fichier JSON" })
                }
                res.status(201).json({message: "Hero added", hero: newHero})
            })
        } catch (error) {
            console.error("Erreur JSON :",error)
            res.status(500).json({ error: "Erreur JSON" })
        }
    })
}
export const updateHero = (req,res) => {
    fs.readFile(file, "utf-8",(err, data) => {
        if (err) {
            console.error("Erreur lecture fichier JSON :",err)
            res.status(500).json({ error: "Erreur lecture fichier JSON" })
        }
        try {
            const id = parseInt(req.params.id)
            const heroes = JSON.parse(data)
            const i = heroes.characters.findIndex(hero => hero.id == id)
            if (i === -1) {
                return res.status(404).json({ error: "Hero not found" })
            }
            heroes.characters[i] = { ...heroes.characters[i], ...req.body }
            fs.writeFile(file, JSON.stringify(heroes), (err) => {
                if (err) {
                    console.error("Erreur lecture fichier JSON :",err)
                    return res.status(500).json({ error: "Erreur lecture fichier JSON" })
                }
                res.json({message: "Hero updated" ,character: heroes.characters[i]})
            })
        } catch (error) {
            console.error("Erreur JSON :",error)
            res.status(500).json({ error: "Erreur JSON" })
        }
    })
}
export const deleteHero = (req,res) => {
    fs.readFile(file, "utf-8",(err, data) => {
        if (err) {
            console.error("Erreur lecture fichier JSON :",err)
            res.status(500).json({ error: "Erreur lecture fichier JSON" })
        }
        try {
            const id = parseInt(req.params.id)
            const heroes = JSON.parse(data)
            const i = heroes.characters.findIndex(hero => hero.id == id)
            if (i === -1) {
                return res.status(404).json({ error: "Hero not found" })
            }
            const removed = heroes.characters.splice(i,1)
            fs.writeFile(file, JSON.stringify(heroes), (err) => {
                if (err) {
                    console.error("Erreur lecture fichier JSON :",err)
                    return res.status(500).json({ error: "Erreur lecture fichier JSON" })
                }
                res.json({message: "Hero deleted" ,character: removed[i]})
            })
        } catch (error) {
            console.error("Erreur JSON :",error)
            res.status(500).json({ error: "Erreur JSON" })
        }
    })
}