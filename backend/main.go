package main

import (
	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
)

func main() {
	r := gin.Default()

	models.ConnectDatabase()

	r.POST("/login")
}
