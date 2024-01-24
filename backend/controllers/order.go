package controllers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
)

const layout = "2006-01-02"

func FindOrders(c *gin.Context) {
	var orders []models.Order
	models.DB.Find(&orders)

	c.JSON(http.StatusOK, gin.H{"data": orders})
}

func FindOrder(c *gin.Context) {
	var order models.Order

	if err := models.DB.Where("id = ?", c.Param("id")).First(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Order not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": order})
}

func CreateOrder(c *gin.Context) {
	var input SaveOrderInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	deliveryDate, err := time.Parse(layout, input.DeliveryDate)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tx := models.DB.Begin()

	order := models.Order{
		CustomerId:   input.CustomerId,
		Paid:         input.Paid,
		Deliver:      input.Deliver,
		DeliveryDate: deliveryDate,
	}
	tx.Create(&order)

	CreateOrderProducts(input.Products, int(order.ID), tx)

	if err := tx.Commit().Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": order})
}

func UpdateOrder(c *gin.Context) {
	var order models.Order

	if err := models.DB.Where("id = ?", c.Param("id")).First(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Order not found"})
		return
	}

	var input SaveOrderInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tx := models.DB.Begin()

	deliveryDate, err := time.Parse(layout, input.DeliveryDate)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tx.Model(&order).Updates(&models.Order{
		Paid:         input.Paid,
		Deliver:      input.Deliver,
		DeliveryDate: deliveryDate,
	})

	UpdateOrderProducts(input.Products, input.UpdateProducts, input.DeleteProducts, int(order.ID), tx)

	if err := tx.Commit().Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": order})
}

func DeleteOrder(c *gin.Context) {
	var order models.Order

	if err := models.DB.Where("id = ?", c.Param("id")).First(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Order not found"})
		return
	}

	tx := models.DB.Begin()

	DeleteOrderProducts(int(order.ID), tx)

	tx.Delete(&order)

	if err := tx.Commit().Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": true})
}
