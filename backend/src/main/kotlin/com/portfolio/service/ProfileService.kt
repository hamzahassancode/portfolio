package com.portfolio.service

import com.portfolio.domain.Profile
import com.portfolio.dto.ProfileDto
import com.portfolio.repository.ProfileRepository
import org.springframework.stereotype.Service

@Service
class ProfileService(private val profileRepository: ProfileRepository) {

    fun getProfile(): ProfileDto {
        val profile = profileRepository.findAll().firstOrNull()
            ?: throw NoSuchElementException("Profile not found")
        return profile.toDto()
    }

    private fun Profile.toDto() = ProfileDto(
        id = id,
        fullName = fullName,
        title = title,
        bio = bio,
        email = email,
        phone = phone,
        location = location,
        githubUrl = githubUrl,
        linkedinUrl = linkedinUrl,
        avatarUrl = avatarUrl,
        resumeUrl = resumeUrl
    )
}
