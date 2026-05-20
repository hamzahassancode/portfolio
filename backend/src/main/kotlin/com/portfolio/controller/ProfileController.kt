package com.portfolio.controller

import com.portfolio.dto.ProfileDto
import com.portfolio.service.ProfileService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/profile")
class ProfileController(private val profileService: ProfileService) {

    @GetMapping
    fun getProfile(): ResponseEntity<ProfileDto> =
        ResponseEntity.ok(profileService.getProfile())
}
