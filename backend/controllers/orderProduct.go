package controllers

import (
	"github.com/trentsgustavo/agrotech/models"
	"gorm.io/gorm"
)

func CreateOrderProducts(productsToInsert []OrderProductInput, orderId int, tx *gorm.DB) {
	var products []models.OrderProduct

	for _, product := range productsToInsert {
		products = append(products, models.OrderProduct{
			OrderId:   orderId,
			ProductId: product.ProductId,
			Price:     product.Price,
			Quantity:  product.Quantity,
			CreatedBy: 1,
			UpdatedBy: 1,
		})
	}

	tx.Create(products)
}

func UpdateOrderProducts(productsToInsert []OrderProductInput, productsToUpdate []OrderProductInput, productsToDelete []int, orderId int, tx *gorm.DB) {
	var products []models.OrderProduct

	if len(productsToInsert) > 0 {
		for _, product := range productsToInsert {
			products = append(products, models.OrderProduct{
				OrderId:   orderId,
				ProductId: product.ProductId,
				Price:     product.Price,
				Quantity:  product.Quantity,
				CreatedBy: 1,
				UpdatedBy: 1,
			})
		}

		tx.Create(products)
	}

	if len(productsToUpdate) > 0 {
		for _, product := range productsToUpdate {
			tx.Model(models.OrderProduct{}).Where("id = ?", product.ID).Updates(models.OrderProduct{
				Price:    product.Price,
				Quantity: product.Quantity,
			})
		}
	}

	if len(productsToDelete) > 0 {
		tx.Delete(&models.OrderProduct{}, productsToDelete)
	}
}

func DeleteOrderProducts(orderId int, tx *gorm.DB) {
	var orderProduct models.OrderProduct

	tx.Where("order_id = ?", orderId).Delete(&orderProduct)
}
