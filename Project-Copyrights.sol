// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.8.5;


contract ProductCopyrights {

    struct Project {
        string tittle;
        string shortDescription;
        string description;
        string[] skillId;
    }
    mapping(string => Project) public projects;

    // ["testing", "short desc", "desc", ["hjghg", "hjgugv"]]

    function addProject(string calldata _id, Project memory newProject) public {
        projects[_id] = newProject;
    }

    function getProject(string calldata _id) public view returns(Project memory) {
        return projects[_id];
    }

}
