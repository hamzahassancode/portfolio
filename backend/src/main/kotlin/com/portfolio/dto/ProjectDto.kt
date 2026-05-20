package com.portfolio.dto

import java.time.LocalDateTime

data class ProjectDto(
    val id: Long,
    val title: String,
    val description: String,
    val imageUrl: String?,
    val repoUrl: String?,
    val demoUrl: String?,
    val techStack: List<String>,
    val featured: Boolean,
    val createdAt: LocalDateTime
)
