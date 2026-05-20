package com.portfolio.dto

import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Size

data class ContactRequest(
    @field:NotBlank(message = "Name is required")
    @field:Size(max = 100)
    val name: String,

    @field:NotBlank(message = "Email is required")
    @field:Email(message = "Invalid email address")
    val email: String,

    @field:Size(max = 200)
    val subject: String?,

    @field:NotBlank(message = "Message is required")
    @field:Size(min = 10, max = 2000, message = "Message must be between 10 and 2000 characters")
    val message: String
)
