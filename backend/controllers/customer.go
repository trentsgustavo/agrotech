package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
)

func FindCustomers(c *gin.Context) {
	var customers []models.Customer
	models.DB.Find(&customers)

	c.JSON(http.StatusOK, gin.H{"data": customers})
}

func CreateCustomer(c *gin.Context) {
	var input SaveCustomerInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	customer := models.Customer{
		Document: input.Document,
		Address:  input.Address,
		UserId:   input.UserId,
	}
	models.DB.Create(&customer)

	c.JSON(http.StatusOK, gin.H{"data": customer})
}

func UpdateCustomer(c *gin.Context) {
	var customer models.Customer

	if err := models.DB.Where("id = ?", c.Param("id")).First(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Customer not found"})
		return
	}

	var input SaveCustomerInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Model(&customer).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": customer})
}

func DeleteCustomer(c *gin.Context) {
	var customer models.Customer

	if err := models.DB.Where("id = ?", c.Param("id")).First(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Customer not found"})
		return
	}

	models.DB.Delete(&customer)

	c.JSON(http.StatusOK, gin.H{"data": true})
}

func FindCustomer(c *gin.Context) {
	var customer models.Customer

	if err := models.DB.Where("id = ?", c.Param("id")).First(&customer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Customer not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": customer})
}
