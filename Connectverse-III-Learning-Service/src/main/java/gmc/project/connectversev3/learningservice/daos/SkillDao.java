package gmc.project.connectversev3.learningservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.learningservice.entities.SkillEntity;

public interface SkillDao extends JpaRepository<SkillEntity, String> {

}
