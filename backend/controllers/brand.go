package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
)

type SaveBrandInput struct {
	Name string `json:"name"`
}

func FindBrands(c *gin.Context) {
	var brands []models.Brand
	models.DB.Find(&brands)

	c.JSON(http.StatusOK, gin.H{"data": brands})
}

func CreateBrand(c *gin.Context) {
	var input SaveBrandInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	brand := models.Brand{Name: input.Name}
	models.DB.Create(&brand)

	c.JSON(http.StatusOK, gin.H{"data": brand})
}

func UpdateBrand(c *gin.Context) {
	var brand models.Brand

	if err := models.DB.Where("id = ?", c.Param("id")).First(&brand).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Brand not found"})
		return
	}

	var input SaveBrandInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Model(&brand).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": brand})
}

func DeleteBrand(c *gin.Context) {
	var brand models.Brand

	if err := models.DB.Where("id = ?", c.Param("id")).First(&brand).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Brand not found"})
		return
	}

	models.DB.Delete(&brand)

	c.JSON(http.StatusOK, gin.H{"data": true})
}

func FindBrand(c *gin.Context) {
	var brand models.Brand

	if err := models.DB.Where("id = ?", c.Param("id")).First(&brand).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Brand not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": brand})
}
