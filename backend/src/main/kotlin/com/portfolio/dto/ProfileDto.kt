package com.portfolio.dto

data class ProfileDto(
    val id: Long,
    val fullName: String,
    val title: String,
    val bio: String,
    val email: String?,
    val phone: String?,
    val location: String?,
    val githubUrl: String?,
    val linkedinUrl: String?,
    val avatarUrl: String?,
    val resumeUrl: String?
)
