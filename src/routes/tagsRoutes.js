const { Router } = require("express")
const TagController = require("../controllers/tagController")

const tagsRouter = Router()

const tagController = new TagController

tagsRouter.use("/:user_id", tagController.index)

module.exports = tagsRouter


