package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/trentsgustavo/agrotech/utils"
)

func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		cookie, err := c.Cookie("token")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		if !utils.ValidateAccessToken(cookie) {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		c.Next()
	}
}
