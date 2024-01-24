package main

import (
	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/controllers"
	"github.com/trentsgustavo/agrotech/models"
)

func main() {
	r := gin.Default()

	models.ConnectDatabase()

	brands := r.Group("/brands")
	categories := r.Group("/categories")
	users := r.Group("/users")
	customers := r.Group("/customers")
	products := r.Group("/products")
	orders := r.Group("/orders")

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

	r.Run()
}
