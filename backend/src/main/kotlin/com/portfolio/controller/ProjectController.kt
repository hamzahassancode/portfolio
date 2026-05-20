package com.portfolio.controller

import com.portfolio.dto.ProjectDto
import com.portfolio.service.ProjectService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/projects")
class ProjectController(private val projectService: ProjectService) {

    @GetMapping
    fun getAllProjects(@RequestParam(required = false) featured: Boolean?): ResponseEntity<List<ProjectDto>> {
        val projects = if (featured == true) projectService.getFeaturedProjects()
                       else projectService.getAllProjects()
        return ResponseEntity.ok(projects)
    }

    @GetMapping("/{id}")
    fun getProject(@PathVariable id: Long): ResponseEntity<ProjectDto> =
        ResponseEntity.ok(projectService.getProject(id))
}
