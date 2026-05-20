package com.portfolio.domain

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "project")
class Project(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var title: String,

    @Column(nullable = false, columnDefinition = "TEXT")
    var description: String,

    @Column(name = "image_url")
    var imageUrl: String? = null,

    @Column(name = "repo_url")
    var repoUrl: String? = null,

    @Column(name = "demo_url")
    var demoUrl: String? = null,

    @Column(name = "tech_stack")
    var techStack: String? = null,

    var featured: Boolean = false,

    @Column(name = "sort_order")
    var sortOrder: Int = 0,

    @Column(name = "created_at")
    val createdAt: LocalDateTime = LocalDateTime.now()
)
