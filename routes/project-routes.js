const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Project = require('../models/project-model')
const Task = require('../models/task-model')

router.post('/projects', (req, res, next) => {
    Project
        .create({title: req.body.title, description: req.body.description, tasks: []})
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/projects', (req, res, next) => {
    Project
        .find()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/projects/:id', (req, res, next) => {
    Project
        .findById(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router