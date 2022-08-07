package gmc.project.connectversev3.learningservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.learningservice.entities.CommentEntity;

public interface CommentDao extends JpaRepository<CommentEntity, String> {

}
