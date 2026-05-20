package com.portfolio.repository

import com.portfolio.domain.Skill
import org.springframework.data.jpa.repository.JpaRepository

interface SkillRepository : JpaRepository<Skill, Long> {
    fun findAllByOrderBySortOrderAsc(): List<Skill>
    fun findByCategoryOrderBySortOrderAsc(category: String): List<Skill>
}
