package com.portfolio.service

import com.portfolio.domain.Project
import com.portfolio.dto.ProjectDto
import com.portfolio.repository.ProjectRepository
import org.springframework.stereotype.Service

@Service
class ProjectService(private val projectRepository: ProjectRepository) {

    fun getAllProjects(): List<ProjectDto> =
        projectRepository.findAllByOrderBySortOrderAsc().map { it.toDto() }

    fun getFeaturedProjects(): List<ProjectDto> =
        projectRepository.findByFeaturedTrueOrderBySortOrderAsc().map { it.toDto() }

    fun getProject(id: Long): ProjectDto =
        projectRepository.findById(id).orElseThrow { NoSuchElementException("Project $id not found") }.toDto()

    private fun Project.toDto() = ProjectDto(
        id = id,
        title = title,
        description = description,
        imageUrl = imageUrl,
        repoUrl = repoUrl,
        demoUrl = demoUrl,
        techStack = techStack?.split(",")?.map { it.trim() } ?: emptyList(),
        featured = featured,
        createdAt = createdAt
    )
}
