package utils

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/trentsgustavo/agrotech/models"
)

type Token struct {
	ID uint `json:"id"`
	jwt.RegisteredClaims
}

func NewAccessToken(user models.User, c *gin.Context) string {
	expirationTime := time.Now().Add(5 * time.Minute)

	claims := &Token{
		ID: user.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}

	return tokenString
}

func ValidateAccessToken(accessToken string) bool {
	token, err := jwt.Parse(accessToken, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET")), nil
	})

	if err != nil {
		return false
	}

	return token.Valid
}
