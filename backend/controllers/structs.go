package controllers

type OrderProductInput struct {
	ID        int     `json:"id,omitempty"`
	ProductId int     `json:"productId,omitempty"`
	Price     float64 `json:"price"`
	Quantity  int     `json:"quantity"`
}

type SaveOrderInput struct {
	CustomerId     int                 `json:"customerId"`
	Paid           bool                `json:"paid"`
	Deliver        bool                `json:"deliver"`
	DeliveryDate   string              `json:"deliveryDate"`
	Products       []OrderProductInput `json:"products,omitempty"`
	UpdateProducts []OrderProductInput `json:"updateProducts,omitempty"`
	DeleteProducts []int               `json:"deleteProducts,omitempty"`
}

type SaveBrandInput struct {
	Name string `json:"name"`
}

type SaveCategoryInput struct {
	Name    string `json:"name"`
	Measure string `json:"measure"`
}

type SaveCustomerInput struct {
	Document string `json:"document"`
	Address  string `json:"address"`
	UserId   int    `json:"userId"`
}

type SaveProductInput struct {
	Name       string  `json:"name"`
	PriceBuy   float64 `json:"priceBuy"`
	PriceSale  float64 `json:"priceSale"`
	Stock      int     `json:"stock"`
	BrandId    int     `json:"brandId"`
	CategoryId int     `json:"categoryId"`
}

type CreateUserInput struct {
	Username  string `json:"username"`
	Password  []byte `json:"password"`
	Name      string `json:"name"`
	Phone     string `json:"phone"`
	ProfileId int    `json:"profileId"`
}

type UpdateUserInput struct {
	Username  string `json:"username"`
	Name      string `json:"name"`
	Phone     string `json:"phone"`
	ProfileId int    `json:"profileId"`
}
