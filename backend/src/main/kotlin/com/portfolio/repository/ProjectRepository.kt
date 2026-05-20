package com.portfolio.repository

import com.portfolio.domain.Project
import org.springframework.data.jpa.repository.JpaRepository

interface ProjectRepository : JpaRepository<Project, Long> {
    fun findAllByOrderBySortOrderAsc(): List<Project>
    fun findByFeaturedTrueOrderBySortOrderAsc(): List<Project>
}
