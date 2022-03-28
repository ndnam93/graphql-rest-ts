import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Project from "./Project.model";

@Table({
    timestamps: false, 
})
class Task extends Model {
    @Column
    description: string;

    @ForeignKey(() => Project)
    @Column
    projectId: number;

    @BelongsTo(() => Project)
    project: Project;
}

export default Task;
