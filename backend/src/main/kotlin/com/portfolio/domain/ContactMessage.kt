package com.portfolio.domain

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "contact_message")
class ContactMessage(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var email: String,

    var subject: String? = null,

    @Column(nullable = false, columnDefinition = "TEXT")
    var message: String,

    @Column(name = "is_read")
    var isRead: Boolean = false,

    @Column(name = "created_at")
    val createdAt: LocalDateTime = LocalDateTime.now()
)
