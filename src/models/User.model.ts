import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Project from "./Project.model";

@Table({
    timestamps: false, 
})
class User extends Model {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    email: string;

    @HasMany(() => Project)
    projects: Project[];
}

export default User;