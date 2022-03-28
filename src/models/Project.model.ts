import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Task from "./Task.model";
import User from "./User.model";

@Table({
    timestamps: false, 
})
class Project extends Model {
    @Column
    name: string;

    @ForeignKey(() => User)
    @Column
    userId: number;
    
    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Task)
    tasks: Task[];
}

export default Project;