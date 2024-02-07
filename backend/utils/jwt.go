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
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	// Declare the token with the algorithm used for signing, and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(os.Getenv("SECRET"))

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
	}

	return tokenString
}
