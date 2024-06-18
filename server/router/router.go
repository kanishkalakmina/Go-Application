package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/neerajbg/go-fiber-blog/controller"
)

func SetupRoutes(app *fiber.App) {

	app.Get("/", controller.List)
	app.Get("/:id", controller.Detail)
	app.Post("/", controller.Create)
	app.Put("/:id", controller.Update)
	app.Delete("/:id", controller.Delete)

}
