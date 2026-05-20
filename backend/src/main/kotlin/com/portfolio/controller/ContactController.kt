package com.portfolio.controller

import com.portfolio.dto.ContactRequest
import com.portfolio.service.ContactService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/contact")
class ContactController(private val contactService: ContactService) {

    @PostMapping
    fun sendMessage(@Valid @RequestBody request: ContactRequest): ResponseEntity<Map<String, Any>> {
        val id = contactService.saveMessage(request)
        return ResponseEntity.ok(mapOf("success" to true, "messageId" to id))
    }
}
