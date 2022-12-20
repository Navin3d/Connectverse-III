import React, { useState, useEffect } from "react";
import projectCopyrights from "../utils/Project-Copyright-Contarct";
import { getAccounts } from "../utils/web3";


const INITIAL_STATE = {
    tittle: "",
    shortDescription: "",
    description: "",
    skillId: ["", ""]
}

const CopyrightsProject = () => {
    const [projectId, setProjectId] = useState(INITIAL_STATE);
    const [project, setProject] = useState(INITIAL_STATE);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const account = await getAccounts();
        console.log(projectId);
        projectCopyrights.methods.getAProject(projectId).call().then(setProject);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="projectId" type="text" onChange={(e) => setProjectId(e.target.value)} />
                <input type="submit" />
            </form>
            {(project) ? (
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">{ project.tittle }</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{ project.shortDescription }</h6>
                        <p class="card-text">{ project.description }</p>
                        {
                            project.skillId.map(skill => (<a href={`skill/${skill}`} class="card-link">{ skill }</a>))
                        }
                    </div>
                </div>
                ) : ""
            }
        </div>
    );
}

export default CopyrightsProject;
