package com.portfolio.domain

import jakarta.persistence.*

@Entity
@Table(name = "profile")
class Profile(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "full_name", nullable = false)
    var fullName: String,

    @Column(nullable = false)
    var title: String,

    @Column(nullable = false, columnDefinition = "TEXT")
    var bio: String,

    var email: String? = null,
    var phone: String? = null,
    var location: String? = null,

    @Column(name = "github_url")
    var githubUrl: String? = null,

    @Column(name = "linkedin_url")
    var linkedinUrl: String? = null,

    @Column(name = "avatar_url")
    var avatarUrl: String? = null,

    @Column(name = "resume_url")
    var resumeUrl: String? = null
)
