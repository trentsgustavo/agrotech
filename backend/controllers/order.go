package controllers

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/models"
)

type SaveOrderInput struct {
	CustomerId   int    `json:"customerId"`
	Paid         bool   `json:"paid"`
	Deliver      bool   `json:"deliver"`
	DeliveryDate string `json:"deliveryDate"`
	Products     []int  `json:"products"`
}

type CreateOrderProductInput struct {
	OrderId   int `json:"orderId"`
	ProductId int `json:"productId"`
	CreatedBy int `json:"createdBy"`
	UpdatedBy int `json:"updatedBy"`
}

func FindOrders(c *gin.Context) {
	var orders []models.Order
	models.DB.Find(&orders)

	c.JSON(http.StatusOK, gin.H{"data": orders})
}

func CreateOrder(c *gin.Context) {
	var input SaveOrderInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	const layout = "2006-01-02"
	t, err := time.Parse(layout, input.DeliveryDate)
	if err != nil {
		log.Fatal(err)
	}

	order := models.Order{
		CustomerId:   input.CustomerId,
		Paid:         input.Paid,
		Deliver:      input.Deliver,
		DeliveryDate: t,
	}
	models.DB.Create(&order)

	var products []models.OrderProduct

	for i := 0; i < len(input.Products); i++ {
		products = append(products, models.OrderProduct{
			OrderId:   int(order.ID),
			ProductId: input.Products[i],
			CreatedBy: 1,
			UpdatedBy: 1,
		})
	}

	models.DB.Create(products)

	c.JSON(http.StatusOK, gin.H{"data": order})
}
