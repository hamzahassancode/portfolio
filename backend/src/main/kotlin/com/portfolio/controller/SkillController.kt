package com.portfolio.controller

import com.portfolio.service.SkillService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/skills")
class SkillController(private val skillService: SkillService) {

    @GetMapping
    fun getSkills(@RequestParam(required = false) grouped: Boolean?): ResponseEntity<Any> {
        return if (grouped == true) ResponseEntity.ok(skillService.getGroupedSkills())
               else ResponseEntity.ok(skillService.getAllSkills())
    }
}
