package com.portfolio.service

import com.portfolio.domain.ContactMessage
import com.portfolio.dto.ContactRequest
import com.portfolio.repository.ContactMessageRepository
import org.springframework.stereotype.Service

@Service
class ContactService(private val contactMessageRepository: ContactMessageRepository) {

    fun saveMessage(request: ContactRequest): Long {
        val message = ContactMessage(
            name = request.name,
            email = request.email,
            subject = request.subject,
            message = request.message
        )
        return contactMessageRepository.save(message).id
    }
}
