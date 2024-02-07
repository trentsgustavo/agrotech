package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/trentsgustavo/agrotech/controllers"
	"github.com/trentsgustavo/agrotech/middleware"
	"github.com/trentsgustavo/agrotech/models"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	PORT := os.Getenv("PORT")

	if PORT == "" {
		PORT = "8080"
	}

	r := gin.Default()

	models.ConnectDatabase()

	r.POST("/login", controllers.Login)

	brands := r.Group("/brands").Use(middleware.AuthRequired())
	categories := r.Group("/categories").Use(middleware.AuthRequired())
	users := r.Group("/users").Use(middleware.AuthRequired())
	customers := r.Group("/customers").Use(middleware.AuthRequired())
	products := r.Group("/products").Use(middleware.AuthRequired())
	orders := r.Group("/orders").Use(middleware.AuthRequired())

	brands.GET("", controllers.FindBrands)
	brands.GET(":id", controllers.FindBrand)
	brands.POST("", controllers.CreateBrand)
	brands.PATCH(":id", controllers.UpdateBrand)
	brands.DELETE(":id", controllers.DeleteBrand)

	categories.GET("", controllers.FindCategories)
	categories.GET(":id", controllers.FindCategory)
	categories.POST("", controllers.CreateCategory)
	categories.PATCH(":id", controllers.UpdateCategory)
	categories.DELETE(":id", controllers.DeleteBrand)

	users.GET("", controllers.FindUsers)
	users.GET(":id", controllers.FindUser)
	users.POST("", controllers.CreateUser)
	users.PATCH(":id", controllers.UpdateUser)
	users.DELETE(":id", controllers.DeleteUser)

	customers.GET("", controllers.FindCustomers)
	customers.GET(":id", controllers.FindCustomer)
	customers.POST("", controllers.CreateCustomer)
	customers.PATCH(":id", controllers.UpdateCustomer)
	customers.DELETE(":id", controllers.DeleteCustomer)

	products.GET("", controllers.FindProducts)
	products.GET(":id", controllers.FindProduct)
	products.POST("", controllers.CreateProduct)
	products.PATCH(":id", controllers.UpdateProduct)
	products.DELETE(":id", controllers.DeleteProduct)

	orders.GET("", controllers.FindOrders)
	orders.GET(":id", controllers.FindOrder)
	orders.POST("", controllers.CreateOrder)
	orders.PATCH(":id", controllers.UpdateOrder)
	orders.DELETE(":id", controllers.DeleteOrder)

	r.Run(":" + PORT)
}
