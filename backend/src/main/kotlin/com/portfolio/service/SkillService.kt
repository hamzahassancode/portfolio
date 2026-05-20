package com.portfolio.service

import com.portfolio.domain.Skill
import com.portfolio.dto.SkillDto
import com.portfolio.repository.SkillRepository
import org.springframework.stereotype.Service

@Service
class SkillService(private val skillRepository: SkillRepository) {

    fun getAllSkills(): List<SkillDto> =
        skillRepository.findAllByOrderBySortOrderAsc().map { it.toDto() }

    fun getSkillsByCategory(category: String): List<SkillDto> =
        skillRepository.findByCategoryOrderBySortOrderAsc(category).map { it.toDto() }

    fun getGroupedSkills(): Map<String, List<SkillDto>> =
        getAllSkills().groupBy { it.category }

    private fun Skill.toDto() = SkillDto(
        id = id,
        name = name,
        category = category,
        level = level,
        iconUrl = iconUrl
    )
}
