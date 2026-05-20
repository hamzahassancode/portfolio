package com.portfolio.domain

import jakarta.persistence.*

@Entity
@Table(name = "skill")
class Skill(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var category: String,

    @Column(nullable = false)
    var level: Int,

    @Column(name = "icon_url")
    var iconUrl: String? = null,

    @Column(name = "sort_order")
    var sortOrder: Int = 0
)
