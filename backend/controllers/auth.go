package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
	"github.com/trentsgustavo/agrotech/utils"
)

func Login(c *gin.Context) {
	var input LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		print(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User

	if err := models.DB.Where("username = ?", input.Username).First(&user).Error; err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "User not found"})
		return
	}

	match := utils.CheckPasswordHash(input.Password, user.Password)

	if !match {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Invalid Password"})
		return
	}

	token := utils.NewAccessToken(user, c)

	c.SetCookie("token", token, 300, "/", "localhost", false, true)
}

func Logout(c *gin.Context) {
	c.SetCookie("token", "", -1, "/", "localhost", false, true)
}
