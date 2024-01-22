package models

type Product struct {
	ID        uint    `json:"id"`
	Name      string  `json:"name"`
	PriceBuy  float64 `json:"priceBuy"`
	PriceSale float64 `json:"priceSale"`
	Stock     int     `json:"stock"`
	BrandId   int     `json:"brandId"`
	Brand     Brand
}
