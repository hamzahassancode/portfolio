package com.portfolio.dto

data class SkillDto(
    val id: Long,
    val name: String,
    val category: String,
    val level: Int,
    val iconUrl: String?
)
